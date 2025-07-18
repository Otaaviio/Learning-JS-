function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode !== 13) {
        this.realizaConta();
      }
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = "");

  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("COnta inválida");
        return;
      }
    } catch (e) {
      alert("COnta inválida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();