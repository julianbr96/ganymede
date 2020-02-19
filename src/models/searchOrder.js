const mongoose = require('mongoose');
const searchData = require('../../resources/search-data.json');
const searchDataKeys = Object.keys(searchData).sort();
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
      type: Object,
      required: true,
      validate: {
        validator: function(v) {
          const vKeys = Object.keys(v).sort();
          return JSON.stringify(vKeys) === JSON.stringify(searchDataKeys);
        },
        message: props => `${props.value} is not a valid search data`
      }
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
