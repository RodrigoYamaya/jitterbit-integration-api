const express = require('express');
const orderController = require('./controllers/orderController');

const router = express.Router();

router.get('/orders', orderController.getAll);
router.get('/orders/:id', orderController.getById);
router.post('/orders', orderController.createOrder);
router.delete('/orders/:id', orderController.deleteOrder);
router.put('/orders/:id', orderController.updateOrder);

module.exports = router;