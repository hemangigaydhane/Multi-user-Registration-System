
import Farmer from '../models/Farmer.js';

// @desc    Register a new farmer
// @route   POST /api/farmers
// @access  Private/SCP
export const registerFarmer = async (req, res) => {
  try {
    const { name, phone, villageName, cropType } = req.body;

    const farmer = await Farmer.create({
      name,
      phone,
      villageName,
      cropType,
      registeredBy: req.user._id
    });
    res.status(201).json(farmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all farmers registered by SCP
// @route   GET /api/farmers
// @access  Private/SCP
export const getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find({ registeredBy: req.user._id })
      .sort({ createdAt: -1 });

    res.json(farmers);
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};