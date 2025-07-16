function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(false);
        return;
      }

      resolve(msg.toUpperCase() /* + " - Passei na promise"*/);
    }, tempo);
  });
}

//Promise.all

const promises = [
  "Primeiro valor",
  espera("Promise 1", 3000),
  espera("Promise 2", 500),
  espera("Promise 3", 3000),
  espera(1000, 3000),
  "Outro valor",
];

Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.log(e);
  });

//Promise.race
//Retorna a primeira que resolver

const promesas = [
  espera("Promise 1", rand(1, 3)),
  espera("Promise 2", rand(1, 3)),
  espera(1000, rand(1, 3)),
  espera("Promise 3", rand(1, 3)),
];

Promise.race(promesas)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.log(e);
  });

//Promise.resolve
// Simulates downloading a page with cache logic: returns a resolved promise if in cache, otherwise waits and resolves after a delay.

function baixaPágina() {
  const inCache = true;

  if (inCache) {
    return Promise.resolve("Página em cache");
  } else {
    return espera("Página baixada", 3000);
  }
}

baixaPágina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));