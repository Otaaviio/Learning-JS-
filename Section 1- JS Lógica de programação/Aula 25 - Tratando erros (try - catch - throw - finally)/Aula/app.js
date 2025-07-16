// A variável 'naoExiste', não exiete no código
// console.log(naoExiste)

// O try tenta executar o código, casso houver algum erro o catch exibe alguma outra coisa,
// e se eu quiser tambem posso exibir o erro, mas não é conveniente
// try {
//   console.log(naoExiste);
// } catch (erro) {
//   console.log('A variavel "naoExtisto" não existe');
//   console.log(erro);
// }

// function soma(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new ReferenceError("X e Y precisam ser números.");
//   }

//   return x + y;
// }

// try {
//   console.log(soma(1, 2));
//   console.log(soma("1", 2));
// } catch (error) {
//   console.log(error);
// }

//  try {
//   console.log("Abri o arquivo");
//   console.log("Alterei o arquivo e deu erro");
//   console.log("Fechei o arquivo");
// } catch (error) {
//   console.log("Tratando meu erro");
// } finally {
//   console.log("FINALLY: Eu sempre sou executado");
// }