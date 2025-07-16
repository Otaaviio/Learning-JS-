// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = function () {
    console.log(`Nome completo: ${this.nome} ${this.sobrenome}`);
  };
}

const p1 = new Pessoa("Otávio", "Inaba");
const p2 = new Pessoa("Helena", "Biassi");
p1.nomeCompleto();
p2.nomeCompleto();
