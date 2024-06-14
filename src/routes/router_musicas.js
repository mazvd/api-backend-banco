const express = require("express");
const validarToken = require('../middlewares/auth');
const controllerMusicas = require("../controllers/controller_musicas");

const router = express.Router();

router.post("/", controllerMusicas.validar, controllerMusicas.criar);

router.get("/", validarToken, controllerMusicas.listar);

router.get(
  "/:id",
  controllerMusicas.buscar,
  controllerMusicas.obter
);

router.put('/:id', 
controllerMusicas.buscar,
controllerMusicas.validar,
controllerMusicas.atualizar
);

router.delete('/:id', 
controllerMusicas.buscar,
controllerMusicas.remover);

module.exports = router;