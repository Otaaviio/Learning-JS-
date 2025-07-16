/*
Modo diferente de escrever uma função construtora
Instanciar é criar um objeto a partir de um molde (classe)
Quando eu intancio a classe estou criando um objeto a partir da classe
*/

class Pessoa {
  constructor(nome, sobrenome) {
    (this.nome = nome), (this.sobrenome = sobrenome);
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }
  comer() {
    console.log(`${this.nome} está comendo`);
  }
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa("Otávio", "Inaba");
