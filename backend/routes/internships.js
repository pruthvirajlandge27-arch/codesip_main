import express from 'express';
import { getInternships, getInternshipById, createInternship, updateInternship, deleteInternship } from '../controllers/internship.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(getInternships)
  .post(protect, admin, createInternship);

router.route('/:id')
  .get(getInternshipById)
  .put(protect, admin, updateInternship)
  .delete(protect, admin, deleteInternship);

export default router;
