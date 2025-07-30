import GeraCPF from "./modules/geraCPF";

(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.gerNovoCpf();
})();
