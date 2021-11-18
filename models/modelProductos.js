const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosModel = new Schema(
  {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("productos", productosModel);
