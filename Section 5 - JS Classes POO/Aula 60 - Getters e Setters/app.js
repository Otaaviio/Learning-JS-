/*
A velocidade máxima do fusca é 100, mas para proteger e impedir que alguém altere essa velocidade usamos setters/getters
*/

const _velocidade = Symbol("velocidade");
class Carro {
  constructor(nome, velocidade) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");
c1.velocidade = 99; // O Setter está no sinal de =
console.log(c1.velocidade); //GETTER


