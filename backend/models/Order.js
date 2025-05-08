const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  total_amount: Number,
  delivery_address: String,
  status: { type: String, enum: ['pending', 'confirmed', 'prepared', 'delivered', 'cancelled'], default: 'pending' },
  payment_status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  payment_method: String,
  scheduled_time: Date
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
