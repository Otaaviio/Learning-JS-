const numero = (prompt("Digite um número: "));
const numeroh1 = document.getElementById('numeroh1');

const raiz = document.getElementById("raiz");
const boolean = document.getElementById("boleano");
const nada = document.getElementById("NaN");
const down = document.getElementById("down");
const up = document.getElementById("up");
const casas = document.getElementById("duasCasas");

//==========================

numeroh1.innerHTML = numero
raiz.innerHTML = `<p>A raiz do seu número é ${numero ** (1/2)}</p>`;
nada.innerHTML = `<p>É um número ${Number.isNaN(numero)}</p>`;
boolean.innerHTML = `<p>Seu número é inteiro: ${Number.isInteger(numero)}</p>`;
down.innerHTML = `<p>Seu n° arredondado para baixo: ${Math.floor(numero)}</p>`;
up.innerHTML = `<p>Seu n° arredondado para baixo: ${Math.ceil(numero)}</p>`;
casas.innerHTML = `<p>Seu n° com 2 casa decimais é ${numero.toFixed(2)}</p>`;