const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero == 2 || numero == 7) {
    continue;
  }

  console.log(numero);
}
// continue pula o valor

console.log("                  ");
console.log("==================");
console.log("                  ");
//break quebra o laço

let contador = 0;
do {
  if (contador == 5) {
    break;
  }
  console.log(numeros[contador]);
  contador++;
} while (contador < numeros.length);
