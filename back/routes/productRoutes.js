const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const brandController = require('../controller/brandController');

//route for get all products
router.get('/products', productController.getAllProducts);
router.get('/brands', brandController.getAllBrands);

module.exports = router;