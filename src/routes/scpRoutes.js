

import express from 'express';
import { getDashboard } from '../controllers/scpController.js';
import { protect } from '../middleware/authMiddleware.js';
import roleCheck from '../middleware/roleCheck.js';

const router = express.Router();

router.get('/dashboard', protect, roleCheck('SCP'), getDashboard);

export default router;