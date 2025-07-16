// Protege um objeto
// defineProperty

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque, // <- o valor que ela terá
    writable: false, // <- se o valor pode ser reescrito
    configurable: true, //  <- se as propriedades podem ser alteradas
  });
}

const p1 = new Produto("camisa", 20, 3);
console.log(p1);

// Mostra as chaves semelhante ao for
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}

// defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque, // <- o valor que ela terá
    writable: false, // <- se o valor pode ser reescrito
    configurable: true, //  <- se as propriedades podem ser alteradas
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: estoque, // <- o valor que ela terá
      writable: false, // <- se o valor pode ser reescrito
      configurable: true, //  <- se as propriedades podem ser alteradas
    },
    preco: {
      enumerable: true,
      value: estoque, // <- o valor que ela terá
      writable: false, // <- se o valor pode ser reescrito
      configurable: true, //  <- se as propriedades podem ser alteradas
    },
  });
}
