const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  item_name: { type: String, required: true },
  description: String,
  image_url: String,
  price: { type: Number, required: true },
  discount_percentage: { type: Number, default: 0.0 },
  available: { type: Boolean, default: true },
  category: String
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
