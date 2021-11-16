var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller');

router.get('/listar', userController.listar);

module.exports = router;