import express from 'express';
const router = express.Router();

import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';
import testUser from '../middleware/testUser.js';
router.route('/register').post( register);
router.route('/login').post( login);
router.get('/logout', logout);

router.route('/updateUser').patch(authenticateUser, testUser, updateUser);
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser);

export default router;
