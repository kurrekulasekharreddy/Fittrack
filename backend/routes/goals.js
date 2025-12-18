import express from 'express';
import { getGoal, upsertGoal } from '../controllers/goalController.js';
const router = express.Router();

router.get('/', getGoal);
router.put('/', upsertGoal);

export default router;
