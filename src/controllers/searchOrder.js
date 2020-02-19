const SearchOrder = require('../models/searchOrder');

exports.createSearchOrder = (req, res, next) => {
  const searchOrder = new SearchOrder({
    searchData: req.body
  });
  searchOrder
    .save()
    .then(() => {
      res.status(201).json({
        status: 'Successful'
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};
