const express = require('express');
const orderController = require('./controllers/orderController');

const router = express.Router();

router.get('/order/list', orderController.getAll);

router.post('/order', orderController.createOrder);

router.get('/order/:id', orderController.getById);

router.put('/order/:id', orderController.updateOrder);

router.delete('/order/:id', orderController.deleteOrder);

router.get('/order', orderController.getAll);

module.exports = router;