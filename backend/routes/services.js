import express from 'express';
import { submitServiceRequest, getServiceRequests, updateServiceStatus } from '../controllers/service.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .post(submitServiceRequest)
  .get(protect, admin, getServiceRequests);

router.route('/:id/status')
  .put(protect, admin, updateServiceStatus);

export default router;
