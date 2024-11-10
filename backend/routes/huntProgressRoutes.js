import express from 'express';
const router = express.Router();

import {
  createHuntProgress
} from '../controllers/huntProgressController.js';


router.route('/').post(createHuntProgress)
// .get(getAllHunts).patch(updateHunt);
// remember about :id

export default router;
