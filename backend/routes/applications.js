import express from 'express';
import { submitApplication, getMyApplications, getApplications, updateApplicationStatus } from '../controllers/application.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.route('/')
  .post(upload.single('resume'), submitApplication)
  .get(protect, admin, getApplications);

router.get('/myapplications', protect, getMyApplications);

router.route('/:id/status')
  .put(protect, admin, updateApplicationStatus);

export default router;
