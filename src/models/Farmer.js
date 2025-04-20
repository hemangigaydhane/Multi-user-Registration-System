

import mongoose  from 'mongoose'

const FarmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  villageName: {
    type: String,
    required: true
  },
  cropType: {
    type: String,
    required: true
  },
  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceCenterPartner',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//module.exports = mongoose.model('Farmer', FarmerSchema);
export default mongoose.model("Farmer", FarmerSchema);
