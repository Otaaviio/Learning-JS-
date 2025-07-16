function mostraHora() {
  let data = new Date();

  return console.log(
    data.toLocaleTimeString("pt-BR", {
      hour12: false,
    })
  );
}

const timer = setInterval(mostraHora, 1000);
//o que vai ser executado, frequência que vai ser executado

setTimeout(function () {
  clearInterval(timer);
}, 10000);

setTimeout(function () {
  console.log("Olá mundo");
}, 5000);
