let hora = 50//parseInt(prompt("Que horas são ?\n"));

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 18) {
  console.log("Boa tarde!");
} else if (hora >= 19 && hora <= 23) {
  console.log("Boa noite!");
} else {
    console.log("Hello World!")
}
