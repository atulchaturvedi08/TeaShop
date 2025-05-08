const mongoose = require('mongoose');

const deliveryAgentSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, unique: true },
  is_available: { type: Boolean, default: true },
  current_latitude: Number,
  current_longitude: Number
}, { timestamps: true });

module.exports = mongoose.model('DeliveryAgent', deliveryAgentSchema);
