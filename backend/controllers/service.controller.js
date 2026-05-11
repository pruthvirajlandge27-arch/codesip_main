import ServiceRequest from '../models/ServiceRequest.js';

// @desc    Submit new service request
// @route   POST /api/services
// @access  Public
export const submitServiceRequest = async (req, res, next) => {
  try {
    req.body.user = req.user ? req.user._id : undefined;
    const serviceRequest = await ServiceRequest.create(req.body);
    res.status(201).json({ message: 'Service request submitted successfully', serviceRequest });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all service requests
// @route   GET /api/services
// @access  Private/Admin
export const getServiceRequests = async (req, res, next) => {
  try {
    const requests = await ServiceRequest.find({}).sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    next(error);
  }
};

// @desc    Update service status
// @route   PUT /api/services/:id/status
// @access  Private/Admin
export const updateServiceStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    const validStatuses = ['new', 'contacted', 'in_progress', 'completed'];
    if (!validStatuses.includes(status)) {
      res.status(400);
      throw new Error('Invalid status');
    }

    const serviceRequest = await ServiceRequest.findById(req.params.id);
    if (!serviceRequest) {
      res.status(404);
      throw new Error('Service request not found');
    }

    serviceRequest.status = status;
    const updatedRequest = await serviceRequest.save();

    res.json(updatedRequest);
  } catch (error) {
    next(error);
  }
};
