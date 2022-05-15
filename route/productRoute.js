const express = require('express');
const {
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require('../controllers/product');

const productRoute = express.Router();

productRoute.post('/product', addProduct);
productRoute.get('/product', getProduct);
productRoute.put('/product/:id', updateProduct);
productRoute.delete('/product/:id', deleteProduct);

module.exports = { productRoute };
