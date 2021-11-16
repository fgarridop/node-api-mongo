const modelUsuarios = require('../models/modelUsuario');

exports.listar = async function (req, res) {

  modelUsuarios.find({}, (error, usuarios) => {
    if (error) {
      res.status(200).send({ status: 500, message: "Error obtener usuarios", payload: false });
    } else {
      res.status(200).json({ status: 200, message: false, payload: usuarios });
    }
  })
}