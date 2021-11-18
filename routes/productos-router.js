var express = require("express");
var router = express.Router();
var productosController = require("../controllers/productos-controller");

router.get("/listar", productosController.listar);
router.post("/insertar", productosController.insert);

module.exports = router;
