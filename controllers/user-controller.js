const modelUsuarios = require("../models/modelUsuario");

exports.listar = async function (req, res) {
  modelUsuarios.find({}, (error, usuario) => {
    if (error) {
      res.status(320).send({
        status: 320,
        message: "Error obtener usuarios",
        payload: false,
      });
    } else {
      res.status(200).send({ status: 200, message: false, payload: usuario });
    }
  });
};

exports.insert = async function (req, res) {
  const data = req.body;

  if (data.length > 0) {
    try {
      modelUsuarios.insertMany(data), { w: "majority", wtimeout: 100 };
      res.status(200).send({ status: 200, message: "OK", payload: false });
    } catch (error) {
      console.log(error);
      res.status(320).send({
        status: 320,
        message: "Error al insertar datos",
        payload: false,
      });
    }
  } else {
    res.status(320).send({
      status: 320,
      message: "Sin datos para insertar",
      payload: false,
    });
  }
};

exports.find = async function (req, res) {
  const data = req.body;
  console.log(data);
};
