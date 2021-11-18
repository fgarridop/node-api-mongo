var express = require("express");
var router = express.Router();
var categoriasController = require("../controllers/categorias-controller");

router.get("/listar", categoriasController.listar);
router.post("/insertar", categoriasController.insert);

module.exports = router;
