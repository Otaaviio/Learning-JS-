const data = new Date();
const semana = data.getDay();
const mes = data.getMonth();
const minutos =
  data.getMinutes() <= 9 ? "0" + data.getMinutes() : data.getMinutes();

function formataSemana(semana) {
  let retornaSemana;

  switch (semana) {
    case 0:
      retornaSemana = "Domingo";
      return retornaSemana;
    case 1:
      retornaSemana = "Segunda";
      return retornaSemana;
    case 2:
      retornaSemana = "Terça";
      return retornaSemana;
    case 3:
      retornaSemana = "Quarta";
      return retornaSemana;
    case 4:
      retornaSemana = "Quinta";
      return retornaSemana;
    case 5:
      retornaSemana = "Sexta";
      return retornaSemana;
    case 6:
      retornaSemana = "Sábado";
      return retornaSemana;
    default:
      retornaSemana = "Bugou";
      return retornaSemana;
  }
}

function formataMes(mes) {
  let retornaMes;

  switch (mes) {
    case 0:
      retornaMes = "Janeiro";
      return retornaMes;
    case 1:
      retornaMes = "Fevereiro";
      return retornaMes;
    case 2:
      retornaMes = "Março";
      return retornaMes;
    case 3:
      retornaMes = "Abril";
      return retornaMes;
    case 4:
      retornaMes = "Maio";
      return retornaMes;
    case 5:
      retornaMes = "Junho";
      return retornaMes;
    case 6:
      retornaMes = "Julho";
      return retornaMes;
    case 7:
      retornaMes = "Agosto";
      return retornaMes;
    case 8:
      retornaMes = "Setembro";
      return retornaMes;
    case 9:
      retornaMes = "Outubro";
      return retornaMes;
    case 10:
      retornaMes = "Novembro";
      return retornaMes;
    case 11:
      retornaMes = "Dezembro";
      return retornaMes;
    default:
      retornaMes = "Bugou";
      return retornaMes;
  }
}

function main() {
  const dataHTML = document.querySelector(".data");
  dataHTML.innerHTML = `${formataSemana(
    semana
  )}, ${data.getDate()} de ${formataMes(
    mes
  )} de ${data.getFullYear()}, ${data.getHours()}:${minutos}`;
}
main();

// Leu a documentação

const dataHTML = document.querySelector(".data");
const dataa = new Date();
dataHTML.innerHTML = dataa.toLocalDateString("pt-BR", {
  dateStule: "full",
  timeStyle: "short",
});

// GOAT

function formataMes(mes) {
  const retornaMes = [
    "jnaiero",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return retornaMes[mes];
}

function formataSemana(semana) {
  const retornaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  return retornaSemana[semana];
}


 