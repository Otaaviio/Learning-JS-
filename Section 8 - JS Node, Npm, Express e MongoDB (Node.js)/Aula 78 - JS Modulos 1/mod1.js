// Importa o modulo completo
const app = require("./app.js");
//console.log(app);

// Importa apenas a função
const falaNome = require("./app.js").falaNome();
console.log(falaNome);

// Ou então
const fala = app.falaNome();
console.log(fala);

// Requisição via desestruturação
const { nome, sobrenome, nomeFala } = require("./app.js");

const { Pessoa, Animal } = require("./app.js");

const p1 = new Pessoa("Otávio");
console.log(p1);

const a1 = new Animal("Cachorro");
console.log(a1);

const path = require("path");
const axios = require("axios");