

import express from 'express';
import { registerFarmer, getFarmers } from '../controllers/farmerController.js';
import { protect } from '../middleware/authMiddleware.js';
import roleCheck from '../middleware/roleCheck.js';

const router = express.Router();

router.post('/', protect, roleCheck('SCP'), registerFarmer);
router.get('/', protect, roleCheck('SCP'), getFarmers);

export default router;