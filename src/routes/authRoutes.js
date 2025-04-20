import express from 'express';
import { registerSCP, loginSCP } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerSCP);
router.post('/login', loginSCP);

export default router;

