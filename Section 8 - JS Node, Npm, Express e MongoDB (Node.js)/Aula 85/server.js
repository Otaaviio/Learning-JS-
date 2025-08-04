const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(routes);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.get("/testes/:idUsuario?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params.idUsuario);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na portsa 3000");
});
