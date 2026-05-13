import Application from '../models/Application.js';

// @desc    Submit internship application
// @route   POST /api/applications
// @access  Public
export const submitApplication = async (req, res, next) => {
  try {
    const { name, email, phone, domain, coverLetter } = req.body;
    
    // Check if user already applied for this domain
    const applicationExists = await Application.findOne({ email, domain });
    if (applicationExists) {
      res.status(400);
      throw new Error('You have already applied for this internship domain');
    }

    let resumePath = '';
    if (req.file) {
      resumePath = `/uploads/${req.file.filename}`;
    } else {
      res.status(400);
      throw new Error('Please upload a resume');
    }

    const application = await Application.create({
      user: req.user ? req.user._id : undefined,
      name,
      email,
      phone,
      domain,
      resumeLink: resumePath,
      coverLetter
    });

    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
};

// @desc    Get logged in user applications
// @route   GET /api/applications/myapplications
// @access  Private
export const getMyApplications = async (req, res, next) => {
  try {
    const applications = await Application.find({ user: req.user._id }).populate('internship', 'title status');
    res.json(applications);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private/Admin
export const getApplications = async (req, res, next) => {
  try {
    const applications = await Application.find({}).populate('user', 'id name email').populate('internship', 'title');
    res.json(applications);
  } catch (error) {
    next(error);
  }
};

// @desc    Update application status
// @route   PUT /api/applications/:id/status
// @access  Private/Admin
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    // Ensure status is valid
    const validStatuses = ['pending', 'reviewed', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      res.status(400);
      throw new Error('Invalid status');
    }

    const application = await Application.findById(req.params.id);
    if (!application) {
      res.status(404);
      throw new Error('Application not found');
    }

    application.status = status;
    const updatedApplication = await application.save();

    res.json(updatedApplication);
  } catch (error) {
    next(error);
  }
};
