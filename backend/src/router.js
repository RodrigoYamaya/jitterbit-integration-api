const express = require('express');
const orderController = require('./controllers/orderController');

const router = express.Router();

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Lista todos os pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 */
router.get('/order/list', orderController.getAll);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Busca um pedido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 */
router.get('/order/:id', orderController.getById);

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
router.post('/order', orderController.createOrder);

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualiza um pedido
 */
router.put('/order/:id', orderController.updateOrder);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Remove um pedido
 */
router.delete('/order/:id', orderController.deleteOrder);

module.exports = router;