// Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" "); // .split(" ") separa as palavras por espaço e tranforma em um array
      this.nome = valor.shift(); // .shift() remove o primeiro item do array
      this.sobrenome = valor.join(" ");
    },
    peso,
    altura,
    fala: function (assunto) {
      return `${this.nome} está ${assunto}`; //-> o this está se referindo a quem o chama, no caso está sendo a pessoa na linha 11
    },
    get imc() {
      // -> o get (Getter) tranforma a função em mais um atributo, como nome ou então altura
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p2 = criaPessoa("Helena", "Biassi", 1.6, 50);
p1.nomeCompleto = "Otávio Toshikazu Inaba";
console.log(p1.nomeCompleto);
