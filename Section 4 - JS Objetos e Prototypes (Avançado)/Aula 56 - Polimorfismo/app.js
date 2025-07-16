function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function CC(ag, c, s, l) {
  Conta.call(this, ag, c, s);
  this.l = l;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.l) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(ag, c, s) {
  Conta.call(this, ag, c, s);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc1 = new CC(11, 22, 0, 100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);

const cp1 = new CP1(12, 33, 0);
