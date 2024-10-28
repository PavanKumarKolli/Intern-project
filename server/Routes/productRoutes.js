const express = require('express');
const { getProducts, createProduct } = require('./controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct); 

module.exports = router;
