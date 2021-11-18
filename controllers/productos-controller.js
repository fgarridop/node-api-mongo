const productosModel = require("../models/modelProductos");

exports.listar = async function (req, res) {
  productosModel.find({}, (error, usuario) => {
    if (error) {
      res.status(320).send({
        status: 320,
        message: "Error obtener productos",
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
      productosModel.insertMany(data), { w: "majority", wtimeout: 100 };
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
