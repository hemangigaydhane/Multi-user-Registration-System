
import ServiceCenterPartner from '../models/SCP';
import jwt from 'jsonwebtoken';

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// @desc    Register a new SCP
// @route   POST /api/auth/register
// @access  Public
export const registerSCP = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const scpExists = await ServiceCenterPartner.findOne({ email });
    if (scpExists) {
      return res.status(400).json({ message: 'SCP already exists' });
    }

    const scp = await ServiceCenterPartner.create({
      name,
      email,
      password,
      phone
    });

    if (scp) {
      const token = generateToken(scp._id);
      res.status(201).json({
        _id: scp._id,
        name: scp.name,
        email: scp.email,
        phone: scp.phone,
        token
      });
    } else {
      res.status(400).json({ message: 'Invalid SCP data' });
    }
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login SCP
// @route   POST /api/auth/login
// @access  Public
export const loginSCP = async (req, res) => {
  try {
    const { email, password } = req.body;

    const scp = await ServiceCenterPartner.findOne({ email });
    if (!scp) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await scp.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(scp._id);
    res.json({
      _id: scp._id,
      name: scp.name,
      email: scp.email,
      phone: scp.phone,
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};