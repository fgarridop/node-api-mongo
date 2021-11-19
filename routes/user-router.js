var express = require("express");
var router = express.Router();
var userController = require("../controllers/user-controller");

router.get("/listar", userController.listar);
router.post("/insertar", userController.insert);
router.post("/find", userController.find);

module.exports = router;
