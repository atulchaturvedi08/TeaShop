const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, unique: true },
  password: { type: String, required: true },
  profile_image: String,
  role: { type: String, enum: ['customer', 'admin', 'vender'], default: 'customer' },
  otp_code: String,
  is_verified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
