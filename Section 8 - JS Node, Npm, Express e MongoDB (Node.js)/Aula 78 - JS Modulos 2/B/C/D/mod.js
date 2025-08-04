class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }

  latir(nome) {
    console.log(`${nome} está latindo, au au au`);
  }
}
module.exports = Cachorro;
