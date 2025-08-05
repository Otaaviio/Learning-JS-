const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function middleware(req, res, next) {
  console.log("\n passei no middleware \n");
  next();
}

// Rotas da home
route.get("/", middleware, homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
