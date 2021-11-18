var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let dotenv = require("dotenv").config();
var expressJwt = require("express-jwt");
const db = require("./utils/dbConection");

var app = express();

app.disable("x-powered-by");

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(logger("dev"));
app.use(express.json()); // entender formato json
app.use(express.urlencoded({ extended: false })); // entender datos que llegan de inputs de forms
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var usuarioRouter = require("./routes/user-router");
var productosRouter = require("./routes/productos-router");
var categoriasRouter = require("./routes/categorias-router");

app.get("/", function (req, res) {
  res.send("FGP");
});

app.use("/api/usuarios", usuarioRouter);
app.use("/api/productos", productosRouter);
app.use("/api/categorias", categoriasRouter);

app.listen(process.env.APP_PORT || 3000, () => {
  console.log("server up on port ", process.env.APP_PORT || 3000);
});
