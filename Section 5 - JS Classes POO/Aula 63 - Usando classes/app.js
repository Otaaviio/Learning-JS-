class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfEnviado.replace(/\D+/, ""),
    });
  }

  isSequencia() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
  }

  geraNovoCpf() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfParcial);
    const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);

    this.novoCpf = cpfParcial + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let i of cpfSemDigitos) {
      total += reverso * Number(i);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
}

let validaCPF = new ValidaCPF("070.987.720-03");

if (validaCPF.valida()) {
  console.log("CPF Válido");
} else {
  console.log("CPF Válido");
}
