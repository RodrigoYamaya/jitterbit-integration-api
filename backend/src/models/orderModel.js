const connection = require('./connection');

const getAll = async () => {
  const [orders] = await connection.execute('SELECT * FROM `Order`');
  return orders;
};


const getById = async (id) => {
  const [orders] = await connection.execute(
    'SELECT * FROM `Order` WHERE orderId = ?',
    [id]
  );

  if (orders.length === 0) {
    return null;
  }

  const [items] = await connection.execute(
    'SELECT productId, quantity, price FROM Items WHERE orderId = ?',
    [id]
  );

  return {
    ...orders[0],
    items
  };
};


const createOrder = async (data) => {

  const {
    numeroPedido,
    valorTotal,
    dataCriacao,
    items
  } = data;

  const queryOrder = `
    INSERT INTO \`Order\` (orderId, value, creationDate)
    VALUES (?, ?, ?)
  `;

  await connection.execute(queryOrder, [
    numeroPedido,
    valorTotal,
    dataCriacao
  ]);

  if (items && items.length > 0) {

    const queryItem = `
      INSERT INTO Items (orderId, productId, quantity, price)
      VALUES (?, ?, ?, ?)
    `;

    const itemPromises = items.map((item) =>
      connection.execute(queryItem, [
        numeroPedido,
        item.idItem,
        item.quantidadeItem,
        item.valorItem
      ])
    );

    await Promise.all(itemPromises);
  }

  return { orderId: numeroPedido };
};


const updateOrder = async (id, value) => {

  const query = `
    UPDATE \`Order\`
    SET value = ?
    WHERE orderId = ?
  `;

  const [result] = await connection.execute(query, [value, id]);

  return result;
};


const deleteOrder = async (id) => {

    await connection.execute(
    'DELETE FROM Items WHERE orderId = ?',
    [id]
  );

  const [removed] = await connection.execute(
    'DELETE FROM `Order` WHERE orderId = ?',
    [id]
  );

  return removed;
};

module.exports = {
  getAll,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
};