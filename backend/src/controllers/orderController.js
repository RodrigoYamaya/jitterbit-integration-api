const orderModel = require('../models/orderModel');

// vai Listar todos os pedidos cadastrados 
const getAll = async (_req, res) => {
  try {
    const orders = await orderModel.getAll();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar pedidos', error: error.message });
  }
};

// vai Busca um pedido específico pelo número do  id do pedido 
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderModel.getById(id);

    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar pedido', error: error.message });
  }
};

//  vai Cria um novo pedido realizando o Mapping dos campos 
const createOrder = async (req, res) => {
  try {
    const result = await orderModel.createOrder(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: 'Erro ao criar pedido', error: error.message });
  }
};


const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await orderModel.deleteOrder(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pedido não encontrado para exclusão' });
    }

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar pedido', error: error.message });
  }
};

// vai Atualizar  o valor total de um pedido  existente 
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { valorTotal } = req.body;
    
    const result = await orderModel.updateOrder(id, valorTotal);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pedido não encontrado para atualização' });
    }

    return res.status(200).json({ message: 'Pedido atualizado com sucesso' });
  } catch (error) {
    return res.status(400).json({ message: 'Erro ao atualizar pedido', error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  createOrder,
  deleteOrder,
  updateOrder,
};