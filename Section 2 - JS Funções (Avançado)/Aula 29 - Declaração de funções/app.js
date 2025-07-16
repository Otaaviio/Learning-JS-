//function hoisting
function falaOI() {
  console.log("Oi");
}
falaOI();
//posso cahame ela em qualquer lugar do código

//First-class objects
//function expresson
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("Executando uma varialvel como função");
  funcao();
}
executaFuncao(souUmDado);

//Arrow function
const arrowFunction = (parametro) => {
  console.log("sou uma arrow function");
  console.log(parametro);
};
arrowFunction("aqui esta sendo executado o parametro da função");
setInterval(arrowFunction, 1000);

//Posso ter um objeto dentro de uma função
const objeto = {
  falar: function () {
    console.log("executando uma função dentro de um objeto");
  },
};
