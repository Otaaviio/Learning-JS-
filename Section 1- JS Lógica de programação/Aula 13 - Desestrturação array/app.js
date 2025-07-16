// let a = 'A'
// let b = 'B'
// let c = 'C'

// const numeros = [b, c, a]
// [a, b, c] = numeros

// console.log(a, b, c)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0]
// console.log(primeiroNumero)
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres);
// console.log(resto); rest operator

const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

//                   0         1         2
//                0  1  2   0  1  2   0  1  2
const valores = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(valores[1][2]);

const [, , [, oito]] = valores;
console.log(oito);
