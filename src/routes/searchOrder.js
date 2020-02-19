const express = require('express');
const router = express.Router();
const searchOrderCtrl = require('../controllers/searchOrder');

router.post('/search', searchOrderCtrl.createSearchOrder);

module.exports = router;
