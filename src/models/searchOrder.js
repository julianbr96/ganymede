const mongoose = require('mongoose');

const searchDataSchema = require('./searchDataSchema');
const statusNames = {
  received: 'received',
  processing: 'processing',
  fulfilled: 'fulfilled',
  failed: 'failed'
};
const searchStatus = Object.values(statusNames);

const searchOrderSchema = mongoose.Schema(
  {
    searchData: {
      type: searchDataSchema,
      required: true
    },
    orderStatus: {
      type: String,
      default: statusNames.received,
      enum: searchStatus
    },
    products: { type: Array, default: [] }
  },
  {
    collection: 'search-orders',
    timestamps: true
  }
);

module.exports = mongoose.model('SearchOrder', searchOrderSchema);
