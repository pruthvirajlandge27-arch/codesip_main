import express from 'express';
import { getOpenings, getAllOpenings, createOpening, deleteOpening, updateOpening } from '../controllers/opening.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(getOpenings)
  .post(protect, admin, createOpening);

router.route('/all')
  .get(protect, admin, getAllOpenings);

router.route('/:id')
  .put(protect, admin, updateOpening)
  .delete(protect, admin, deleteOpening);

export default router;
