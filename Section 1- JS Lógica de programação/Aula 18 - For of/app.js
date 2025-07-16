// for clássico - Geramlmente interáveis (Arrays ou Strings)
// for in - Retorna o índice ou chave (String, array ou objeto)
// for of - retorna o valor em si sem o índice (interaiveis, arrays ou strings)

const nomes = ["Otávio", "Inaba", "Toshikazu"];

for (let valor of nomes) {
  console.log(valor);
}

// não da erro pois o objeto não é interável
// const pessoa = {nome: 'Otávio', sobrenome: 'Inaba', idade: 18}

// for (let dado of pessoa) {
//     console.log(dado)
// }
