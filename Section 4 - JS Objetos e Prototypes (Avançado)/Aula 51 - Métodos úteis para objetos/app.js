const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = { ...produto }; // <- copia o objeto
const caneca = Object.assign({});

outraCoisa.nome = "Outro produto";
outraCoisa.preco = 19.99;
console.log(produto);
console.log(outraCoisa);

console.log(Object.keys(produto)); // Mostra as chaves do objeto
console.log(Object.getOwnPropertyDescriptor(produto, "nome")); // <- Mostra a config do elemento

Object.defineProperty(produto, "nome", {
  // set config of object
  writable: false,
  configurable: false,
});

produto.nome = "Try to change";
delete produto.nome;
console.log(produto);

console.log(Object.values(produto)); // <- mostra os valores do objeto
console.log(Object.entries(produto)); // <- separa os elementos em array, permite eu iterar os valores

for (let entry of Object.entries(produto)) {
  console.log(entry);
}
 