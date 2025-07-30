const nome = "Luiz";
const sobrenome = "Miranda";

const falaNome = () => nome + "" + sobrenome;

// Adiciona a chave nome ao objeto module.exports
module.exports.nome = nome;

//atalho
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// this aponta para module.exports
this.qualquerCoisa = "O que eu quiser exportar";

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;
exports.Animal = Animal;
