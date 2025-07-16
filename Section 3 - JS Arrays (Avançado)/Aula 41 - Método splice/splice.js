// MÉTODO SPLICE

//              -5       -4       -3        -2         -1    contagem negativa
//               0        1        2         3          4    contagem positiva
const nomes = [
  "Maria",
  "João",
  "Eduardo",
  "Gabriel",
  "Júliua",
  "Otávio",
  "Helena",
  "Vaz",
  "Guilherme",
];

// o 1° indice se trata de qual índice quero começar a alterar
// nomes.splice(indice, del, elem1, elem2, elem3)
nomes.splice(3, 2);
console.log(nomes);

// guardando os removidos em uma variavel
const teste = nomes.splice(1, 2);
console.log(teste);

// removendo com contagem inversa
const removeInverso = nomes.splice(-2, 1);
console.log(removeInverso);

const removeMAxValue = nomes.splice(-1, Number.MAX_VALUE);
console.log(removeMAxValue);

// alterando indices
const alterados = nomes.splice(3, 0, "honda");
console.log(alterados);
