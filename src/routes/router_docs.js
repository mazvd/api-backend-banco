const swaggerUI = require('swagger-ui-express');
const fs = require("fs");
const yaml = require('yaml');
const express = require('express');

const router = express.Router();


try {
  const file = fs.readFileSync("./swagger.yaml", "utf-8");
  const swaggerDoc = yaml.parse(file);

  router.use("/", swaggerUI.serve);

  router.get("/", swaggerUI.setup(swaggerDoc));
} catch (err) {
  console.error('Erro ao ler/parsing do arquivo YAML:', err);
}

module.exports = router;
