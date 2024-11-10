import express from 'express';
const router = express.Router();

import {
  createHunt,
  getAllHunts,
  updateHunt,
} from '../controllers/huntsController.js';


router.route('/').post(createHunt).get(getAllHunts).patch(updateHunt);
// remember about :id

export default router;
