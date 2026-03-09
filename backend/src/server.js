const app = require('./app');
require('dotenv').config();

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Orders API",
      version: "1.0.0",
      description: "API para gerenciamento de pedidos"
    },
    servers: [{ url: `http://localhost:${PORT}` }]
  },
  apis: ["./src/**/*.js"]   
};

const swaggerSpec = swaggerJsdoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
  console.log(`Swagger docs em http://localhost:${PORT}/docs`);
});