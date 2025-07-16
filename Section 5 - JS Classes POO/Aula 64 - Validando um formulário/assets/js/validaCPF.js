class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfEnviado.replace(/\D+/, ""),
    });
  }

  isSequencia() {
    // Check if all characters are the same
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
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
    if (typeof this.cpfLimpo !== "string") return false; // Corrected
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false; // Call the method
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
}
