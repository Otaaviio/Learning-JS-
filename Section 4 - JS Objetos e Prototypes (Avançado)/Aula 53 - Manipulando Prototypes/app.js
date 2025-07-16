function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = (percentual) => {
  return this.preco = this.preco - this.preco * (percentual / 100);
};

const p1 = new Produto("Camisa", 120);
p1.desconto(33);

const p2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(5);

const p3 = Object.create(Produto.prototype);
p3.preco = 150;
p3.desconto(15);

console.log(p1);
console.log(p2);
console.log(p3);
