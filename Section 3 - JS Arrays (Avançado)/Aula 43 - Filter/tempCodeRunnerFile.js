const pessoasComNomeGrande = pessoas.filter((valor) => {
  const nome = valor.nome;
  const nomeArray = nome.split("");
  let retorna = [];
  nomeArray.length <= 5 ? retorna.push(nome) : false;
  retorna.length > 0 ? console.log(retorna) : false;
});

const velinhos = pessoas.filter((valor) => {
  const idade = valor.idade;
  let retorna = [];
  idade > 50 ? retorna.push(idade) : false;
  retorna.length > 0 ? console.log(retorna) : false;
});