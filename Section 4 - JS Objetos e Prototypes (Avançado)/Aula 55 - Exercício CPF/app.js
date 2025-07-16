// CPF 1
// 705.484.450-52

// CPF 2
// 070.987.720-03

// //Meu Jeito
// let cpf = "070.987.720";

// // Tira os pontos e o ífen do cpf, trasforma o cpf em um array
// let cpfLimpo = cpf.replace(/\D+/g, "");
// let cpfArray = Array.from(cpfLimpo);

// // transforma o array(cpf) em número
// const cpfNum = cpfArray.map((valor) => {
//   return parseFloat(valor);
// });

// // multiplica os valores
// const multiplicaValores = cpfNum.map((valor, indice) => {
//   return parseFloat(valor * (10 - indice));
// });

// // soma os valores multiplicados
// const multiSomada = multiplicaValores.reduce((acumulador, valor) => {
//   return parseFloat((acumulador += valor));
// }, 0);

// function calculaDigito(value) {
//   return parseFloat(11 - (value % 11));
// }

// function insereDigitoNoCpf() {
//   let digito = calculaDigito(multiSomada);
//   return cpfNum.push(digito);
// }
// insereDigitoNoCpf();

// const multiplicaValores2 = cpfNum.map((valor, indice) => {
//   return parseFloat(valor * (11 - indice));
// });

// const multiSomada2 = multiplicaValores2.reduce((acumulador, valor) => {
//   return parseFloat((acumulador += valor));
// }, 0);

// function insere2() {
//   let digito = calculaDigito(multiSomada2);
//   return cpfNum.push(digito);
// }
// insere2();

// console.log(cpfNum.join(""));

//Jeito do professor
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((acumulador, valor) => {
    acumulador += regressivo * Number(valor);
    regressivo--;
    return acumulador;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo
};

const cpf = new ValidaCPF("070.987.720-03");

if (cpf.valida()) {
  console.log('CPF Válido');
} else {
  console.log('CPF Inválido')
}
