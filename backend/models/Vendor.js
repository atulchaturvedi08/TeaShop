const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  shop_name: { type: String, required: true },
  owner_name: String,
  email: { type: String, required: true, unique: true },
  phone: { type: String, unique: true },
  password: { type: String, required: true },
  logo_url: String,
  banner_url: String,
  working_hours: String,
  is_open: { type: Boolean, default: true },
  is_verified: { type: Boolean, default: false },
  rating: { type: Number, default: 0.0 },
  otp_code: String
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema);
