//APENAS EM FUNÇÕES DECLARADAS COM FUNCTION//

//mesmo sem ter algum parametro declarado dentro da função, ela pode recebe-lo
//a chave 'arguments' pode ser usada para exibir os argumentos passados
function exemplo() {
  console.log(arguments[0]);
}
exemplo("Argumento", 1, 2, 3, 4, 5, 6, 7, 8, 9);

// o loop for of percorre agumentos e vai somando através do total
//a chave 'arguments' é independente dos parametros, pois sustenta todos os argumentos criados
function soma(a, b, c) {
  let total = 0;
  for (argumentos of arguments) {
    total += argumentos;
  }
  console.log(total);
}
soma(1, 2, 3, 4, 5, 6, 7, 8, 9);
