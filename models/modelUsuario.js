const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosModel = new Schema({
  nombre: String,
  edad: Number,
  pais: String
}, { versionKey: false });

module.exports = mongoose.model('usuarios', usuariosModel)