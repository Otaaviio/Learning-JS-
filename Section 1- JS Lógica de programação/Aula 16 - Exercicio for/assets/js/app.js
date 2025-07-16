const elementos = [
  { tag: "p", texto: "Frase 1 paragrafo" },
  { tag: "div", texto: "Frase 2 div" },
  { tag: "footer", texto: "Frase 3 footer" },
  { tag: "section", texto: "Frase 4 section" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let createTag = document.creatElement(tag);
  //   createTag.innerText = texto;
  let textoCriado = document.createTextNode(texto);
  
  createTag.appendChild(textoCriado);
  div.appendChild(createTag);
}
container.appendChild(div);

//appendChild = insirir dentro de alguma coisa
