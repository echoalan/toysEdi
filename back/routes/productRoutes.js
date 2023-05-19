const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');


//route for get all products

router.get('/', productController.getAllProducts);


module.exports = router;