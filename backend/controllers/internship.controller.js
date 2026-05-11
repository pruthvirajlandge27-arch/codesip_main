import Internship from '../models/Internship.js';

// @desc    Get all active internships
// @route   GET /api/internships
// @access  Public
export const getInternships = async (req, res, next) => {
  try {
    const internships = await Internship.find({ isActive: true });
    res.json(internships);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single internship
// @route   GET /api/internships/:id
// @access  Public
export const getInternshipById = async (req, res, next) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (internship) {
      res.json(internship);
    } else {
      res.status(404);
      throw new Error('Internship not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Create an internship
// @route   POST /api/internships
// @access  Private/Admin
export const createInternship = async (req, res, next) => {
  try {
    const internship = new Internship(req.body);
    const createdInternship = await internship.save();
    res.status(201).json(createdInternship);
  } catch (error) {
    next(error);
  }
};

// @desc    Update an internship
// @route   PUT /api/internships/:id
// @access  Private/Admin
export const updateInternship = async (req, res, next) => {
  try {
    const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!internship) {
      res.status(404);
      throw new Error('Internship not found');
    }
    res.json(internship);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete an internship
// @route   DELETE /api/internships/:id
// @access  Private/Admin
export const deleteInternship = async (req, res, next) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      res.status(404);
      throw new Error('Internship not found');
    }
    await internship.deleteOne();
    res.json({ message: 'Internship deleted successfully' });
  } catch (error) {
    next(error);
  }
};
