// GETTER E SETTER
// Protege propriedades

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      // <- get pega o valor
      return estoque;
    },
    set: function (valor) {
      if (typeof valor != "number") {
        throw new TypeError("O valor pecisa ser um número");
      }

      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto("camisa", 20, 3);
p1.estoque = 5;
console.log(p1.estoque);
