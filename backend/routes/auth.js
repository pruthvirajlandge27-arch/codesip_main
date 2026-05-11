import express from 'express';
import { registerUser, authUser, getUserProfile, getUsers, deleteUser } from '../controllers/auth.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

router.route('/users')
  .get(protect, admin, getUsers);

router.route('/users/:id')
  .delete(protect, admin, deleteUser);

export default router;
