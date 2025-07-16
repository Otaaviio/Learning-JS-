class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi, bateria) {
    super(nome);
    this.wifi = wifi;
    this.bateria = bateria;
  }

  // ligar() {
  //   if (this.bateria <= 5) {
  //     console.log(
  //       `A bateria está em ${this.bateria}%, para ligar é necessário no mínimo 5%`
  //     );
  //   }
  // }
}

const i1 = new DispositivoEletronico("IPhone");
console.log(i1);
i1.ligar();
console.log(i1);
i1.ligar();
console.log(i1);
i1.desligar();
console.log(i1);

const s1 = new Smartphone("Samsung", "Black", "Galaxy s24");
s1.ligar();
console.log(s1);

const t1 = new Tablet("IPad", "2.4G / 5G", 29);
console.log(t1.ligar());
