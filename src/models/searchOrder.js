const mongoose = require('mongoose');
const statusNames = {
  received: 'received',
  processing: 'processing',
  fulfilled: 'fulfilled',
  failed: 'failed'
};

const searchOrderSchema = mongoose.Schema(
  {
    searchData: { type: Object, required: true },
    orderStatus: {
      type: String,
      default: statusNames.received,
      enum: Object.values(statusNames)
    },
    products: { type: Array, default: [] }
  },
  {
    collection: 'search-orders',
    timestamps: true
  }
);

module.exports = mongoose.model('SearchOrder', searchOrderSchema);
