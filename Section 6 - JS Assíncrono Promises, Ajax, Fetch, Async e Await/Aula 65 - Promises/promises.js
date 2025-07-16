// As pormises servem para avitar o uso de callback

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

espera("Estabelecendo conexão", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espera("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return espera(1, rand(1, 3));
  })
  .then(() => {
    console.log("Exibe dados na tela");
  })
  .catch((e) => {
    console.log(`erro: ${e}`);
  });
