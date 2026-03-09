const orderModel = require('../models/orderModel');

const getAll = async (_req, res) => {
  const orders = await orderModel.getAll();
  return res.status(200).json(orders);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const order = await orderModel.getById(id);

  if (!order) {
    return res.status(404).json({ message: 'Pedido não encontrado' });
  }

  return res.status(200).json(order);
};

const createOrder = async (req, res) => {
  try {
    // Aqui o req.body deve seguir o formato do JSON da pág. 12
    const result = await orderModel.createOrder(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: 'Erro ao criar pedido', error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  await orderModel.deleteOrder(id);
  return res.status(204).json(); // 204 significa "Sucesso, mas sem conteúdo para retornar"
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { valorTotal } = req.body;
  
  await orderModel.updateOrder(id, valorTotal);
  return res.status(200).json({ message: 'Pedido atualizado com sucesso' });
};

module.exports = {
  getAll,
  getById,
  createOrder,
  deleteOrder,
  updateOrder,
};