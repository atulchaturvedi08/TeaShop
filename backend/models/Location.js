const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  latitude: Number,
  longitude: Number,
  address: String,
  city: String,
  state: String,
  pincode: String,
  is_active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);
