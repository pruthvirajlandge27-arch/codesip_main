import express from 'express';
import { submitContact, getContacts, updateContactStatus } from '../controllers/contact.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .post(submitContact)
  .get(protect, admin, getContacts);

router.route('/:id/status')
  .put(protect, admin, updateContactStatus);

export default router;
