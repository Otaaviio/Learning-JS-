function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando intancia de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocalTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date();
  const hora = retornaHora(11);
  console.log(hora);
} catch (error) {
  console.log(error);
} finally {
  console.log("tenha um bom dia");
}
