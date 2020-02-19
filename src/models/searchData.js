const mongoose = require('mongoose');

const searchDataSchema = mongoose.Schema({
  query: { type: String, required: true },
  provider: { type: String, required: true },
  options: { type: Object, required: true },
  callbackUrl: { type: String, required: true }
});

module.exports = mongoose.model('SearchData', searchDataSchema);
