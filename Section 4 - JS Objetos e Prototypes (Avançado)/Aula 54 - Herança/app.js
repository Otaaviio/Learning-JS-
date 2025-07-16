// Molde para outros produtos
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Posso sobrescrever esse protótipo para outro produto
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

// Criando a camiseta utilizando o mesmo Prototype de Produto
Camiseta.prototype = Object.create(Produto.prototype);
// Aponta a função contrutora Camiseta, não para Produto
Camiseta.prototype.constructor = Camiseta;

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor; // Adicionando outra propriedade
}

// Criando a caneca utilizando o mesmo Prototype de Produto
Caneca.prototype = Object.create(Produto.prototype);
// Aponta a função contrutora Caneca, não para Produto
Caneca.prototype.constructor = Caneca;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material; // Adicionando outra propriedade

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

// Usando a Constructor Function para criar um tipo de camiseta
const camisetaMangaLonga = new Camiseta("Camisa Manga Longa", 89.99, "Preta");
camisetaMangaLonga.desconto(20);

// Usando a Constructor Function para criar um tipo de caneca
const canecaSemAlca = new Caneca("Caneca sem Alça", 9.99, "Porcelana", 4);
canecaSemAlca.desconto(10);

console.log(camisetaMangaLonga);
console.log(canecaSemAlca);
