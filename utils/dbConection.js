const mongoose = require("mongoose");
let dotenv = require("dotenv").config();

const url = `${process.env.DB}://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`;

console.log(url);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error al conectar"));
db.once("open", function callback() {
  console.log("base de datos conectada");
});

module.export = db;
