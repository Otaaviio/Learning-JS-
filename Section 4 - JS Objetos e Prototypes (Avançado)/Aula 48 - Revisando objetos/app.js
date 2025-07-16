// MANEIRAS DE CRIAR OBJETOS

const pessoas = {
  nome: "Otávio",
  sobrenome: "Inaba",
};
console.log(pessoas["nome"]);
console.log(pessoas.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = "Beatriz";
pessoa1.sobrenome = "Sobrinho";
pessoa1.idade = 19;
pessoa1.falarNome = function () {
  return `${this.nome} está falando oi`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// FACTORY FUNCTION - CONSTRUCTOR FUNCTION - CLASSES

// FACTORY
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Otávio", "Inaba");
console.log(p1.nomeCompleto);

//CONSTRUCTOR
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p3 = new Pessoa("Luiz", "Miranda");
p1.nome = "Travando objeto";
Object.freeze(p1);
p1.nome = "Destravando objeto";
const p4 = new Pessoa("Honda", "Bala Tensa");
