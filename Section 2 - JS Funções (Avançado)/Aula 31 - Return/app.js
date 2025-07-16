// // RETURN
// // retorna um valor
// // termina a function

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }

// const p1 = criaPessoa("Otávio", "Inaba");
// const p2 = { nome: "Otávio", sobrenome: "Inaba" };

// console.log(typeof p1);
// console.log(typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("Mundo!");
console.log(resto);

// Como usar esse padrão ?
// Ao invés de fazer isso

function duplica(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadriplica(n) {
  return n * 4;
}

// Posso fazer isso

function criaMultiplicador(multiplicador) {
    return function (n){
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2);// <- esse parametro esta entrando no lugar do multiplicador
const triplica = criaMultiplicador(3);// <- esse parametro esta entrando no lugar do multiplicador
const quadriplica = criaMultiplicador(4);// <- esse parametro esta entrando no lugar do multiplicador

console.log(duplica(5))// <- esse parametro esta entrando no lugar do n
console.log(triplica(5))// <- esse parametro esta entrando no lugar do n
console.log(quadriplica(5))// <- esse parametro esta entrando no lugar do n