const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriasModel = new Schema(
  {
    id: Number,
    name: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("categorias", categoriasModel);
