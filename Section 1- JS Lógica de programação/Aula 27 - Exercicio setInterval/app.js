const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

iniciar.addEventListener("click", function (e) {
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener("click", function (e) {
  clearInterval(timer);
});

zerar.addEventListener("click", function (e) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
});

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
