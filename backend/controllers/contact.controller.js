import Contact from '../models/Contact.js';

// @desc    Submit a contact form
// @route   POST /api/contacts
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = await Contact.create({ name, email, subject, message });
    
    // TODO: Send Email Notification via SendGrid/Nodemailer here
    
    res.status(201).json({ message: 'Contact submitted successfully', contact });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contacts
// @access  Private/Admin
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact status
// @route   PUT /api/contacts/:id/status
// @access  Private/Admin
export const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    const validStatuses = ['unread', 'read', 'replied'];
    if (!validStatuses.includes(status)) {
      res.status(400);
      throw new Error('Invalid status');
    }

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    contact.status = status;
    const updatedContact = await contact.save();

    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};
