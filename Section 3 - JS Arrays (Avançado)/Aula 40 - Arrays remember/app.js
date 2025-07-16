//indice          0         1           2         3
const nomes = ["Otávio", "Helena", "Guilherme", "Vaz"];

//rest operator
const getDados = [...nomes];
console.log(getDados);

//trocar indice
nomes[3] = "João";
console.log(nomes);

//deletar elemento sem alterar o indice
delete nomes[3];
console.log(nomes);

//outra maneira de criar array
const numeros = new Array(0, 1, 2, 3);

//passando dados por referência
const novo = nomes;
console.log(novo);
novo.pop();
console.log(novo);

//tamanho do array
console.log(numeros.length);

//removendo do array
const removido = numeros.pop(); // <- o elemento removido está sendo guardado em uma variável
const removInicio = numeros.shift(); // <- .shift remove o elemento do início (pouco usado pois altera todos os indices)
console.log(numeros);
console.log(removido);

//adicionando no array
numeros.push(14); // <- .push adiciona um elemento no final
console.log(numeros);
numeros.unshift(91); // <- .unshift adiciona no começo (pouco usado pois altera todos os indices)
console.log(numeros);

//slice fatiando array
const fatiando = nomes.slice(0, 2); // não inclui o último indice escolhido
console.log(fatiando);

//convertendo string em array
const nomeCompleto = "Joaquim Gomes Ribeiro";
console.log(nomeCompleto);
const nomeSeparado = nomeCompleto.split(" ");
console.log(nomeSeparado);
