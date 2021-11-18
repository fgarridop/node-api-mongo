const modelCategorias = require("../models/modelCategorias");

exports.listar = async function (req, res) {
  modelCategorias.find({}, (error, categoria) => {
    console.log(categoria);
    if (error) {
      res.status(320).send({
        status: 320,
        message: "Error obtener categorias",
        payload: false,
      });
    } else {
      res.status(200).send({ status: 200, message: false, payload: categoria });
    }
  });
};

exports.insert = async function (req, res) {
  const data = req.body;

  if (data.length > 0) {
    try {
      modelCategorias.insertMany(data), { w: "majority", wtimeout: 100 };
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
