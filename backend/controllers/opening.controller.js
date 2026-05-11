import Opening from '../models/Opening.js';

// @desc    Get all active openings
// @route   GET /api/openings
// @access  Public
export const getOpenings = async (req, res, next) => {
  try {
    const openings = await Opening.find({ is_active: true });
    res.json(openings);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all openings (Admin)
// @route   GET /api/openings/all
// @access  Private/Admin
export const getAllOpenings = async (req, res, next) => {
  try {
    const openings = await Opening.find({});
    res.json(openings);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new opening
// @route   POST /api/openings
// @access  Public
export const createOpening = async (req, res, next) => {
  try {
    const { title, companyName, description, redirect_url, is_active } = req.body;

    const opening = new Opening({
      title,
      companyName,
      description,
      redirect_url,
      is_active: is_active !== undefined ? is_active : true,
    });

    const createdOpening = await opening.save();
    res.status(201).json(createdOpening);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete an opening
// @route   DELETE /api/openings/:id
// @access  Private/Admin
export const deleteOpening = async (req, res, next) => {
  try {
    const opening = await Opening.findById(req.params.id);
    if (!opening) {
      res.status(404);
      throw new Error('Opening not found');
    }

    await opening.deleteOne();
    res.json({ message: 'Opening deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Update an opening
// @route   PUT /api/openings/:id
// @access  Private/Admin
export const updateOpening = async (req, res, next) => {
  try {
    const opening = await Opening.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!opening) {
      res.status(404);
      throw new Error('Opening not found');
    }
    res.json(opening);
  } catch (error) {
    next(error);
  }
};
