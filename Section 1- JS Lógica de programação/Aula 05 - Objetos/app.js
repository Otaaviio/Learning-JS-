// objeto
const pessoa1 = { nome: "Otávio", sobrenome: "Inaba", idade: 18 };

// função que cria pesso
function criarpessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

// cadastrando objetos por função
const pessoa2 = criarpessoa("Helena", " Biassi", 18);
const pessoa3 = criarpessoa("Fabiola", " Sobrinho", 40);
const pessoa4 = criarpessoa("Beatriz", " Sobrinho", 25);

console.log(pessoa2.nome + pessoa2.sobrenome, pessoa2.idade);

// entre chaves cria objeto, log não preciso declçarar objetos locais
function criandoSimples(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa22 = criandoSimples("Helena", " Biassi", 18);
const pessoa32 = criandoSimples("Fabiola", " Sobrinho", 40);
const pessoa42 = criandoSimples("Beatriz", " Sobrinho", 25);

// Para criar funções não preciso do function, posso colocar apenas o nome da função e os parenteses
const pessoafunction = {
  nome: "Otávio",
  sobrenome: "Inaba",
  idade: 18,

  fala() {
    console.log(`O objeto "nome" dentro da função é: ${this.nome}e ele(a) tem ${this.idade} anos`);
  },
  somaIdade() {
    this.idade++;
    console.log(this.idade)
  }
};

pessoafunction.fala();
pessoafunction.somaIdade();