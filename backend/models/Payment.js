const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  payment_gateway: String,
  transaction_id: String,
  payment_status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
  paid_amount: Number
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
