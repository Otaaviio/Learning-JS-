const pessoa = {
  nome: "Otávio",
  sobrenome: "Inaba",
  idade: 30,
  endereco: {
    rua: "Av Paulista",
    numero: 270,
  },
};

const {endereco: { rua: r, numero },endereco,} = pessoa;
console.log(r, numero, endereco);

//Atribuição via desestruturação
// const { nome = 'Não existe', sobrenome } = pessoa;
// console.log(nome)

// const nome = pessoa.nome;
// console.log(nome)

// console.log(pessoa.nome)
