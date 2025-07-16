// FILTER

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Função de callback
const numerosFiltrados = numeros.filter((valor, indice, array) => {
  console.log(valor, indice);
  valor > 10;
});
console.log(numerosFiltrados);

// Retorne as pessoas que tem os nomes com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'A'
const pessoas = [
  { nome: "Otavio", idade: 19 },
  { nome: "Helena", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Vaz", idade: 20 },
  { nome: "Vanessa", idade: 55 },
  { nome: "Guilherme", idade: 14 },
  { nome: "Rosana", idade: 67 },
  { nome: "Jorge", idade: 53 },
];

// Meu jeito
const pessoasComNomeGrande = pessoas.filter((valor) => {
  const nome = valor.nome;
  const nomeArray = nome.split("");
  nomeArray.length >= 5 ? console.log(valor.nome) : false;
});

const velinhos = pessoas.filter((valor) => {
  const idade = valor.idade;
  idade > 50 ? console.log(valor.idade) : false;
});

const terminaComA = pessoas.filter((valor) => {
  const nome = valor.nome;
  const nomeArray = nome.split("");
  const ultimaLetra = nomeArray.splice(-1, Number.MAX_VALUE);
  ultimaLetra == "a" ? console.log(valor.nome) : false;
});

// Jeito do professor ╰(*°▽°*)╯
const pessoasComNomeGrandeP = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(pessoasComNomeGrandeP);

const velinhosP = pessoas.filter((valor) => valor.idade >= 50);
console.log(velinhosP);

const terminaComAP = pessoas.filter((valor) => {
  return valor.nome.toLowerCase().endsWith("a");
});
console.log(terminaComAP);
