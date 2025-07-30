import validaCPF from "./validacpf";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  formatado(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  gerNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = validaCPF.geraDigito(cofSemDigito);
    const digito2 = validaCPF.geraDigito(cofSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;

    return this.formatado(novoCpf);
  }
}
