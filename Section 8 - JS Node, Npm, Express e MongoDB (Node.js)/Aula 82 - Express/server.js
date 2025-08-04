const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='nome'>
    <button>Enviar form</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Formulário recebido");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Acessar http://localhost:3000/contato");
  console.log("Servidor executando na portsa 3000");
});

/*
CRUD

CRIAR   LER   ATUALIZAR  APAGAR
CREATE  READ  UPDATE     DELETE
POST    GET   PUT        DELETE

http://meusite.com/ <- GET -> Entregue a página "/" 
http://meusite.com/sobre  <- GET -> Entregue a página "/sobre"
http://meusite.com/contato  <- GET -> Entregue a página "/contato"
*/

/*
Atualização automática do servidor local

1° Intatalar o nodemon
npm i nodemon --save-dev

2° Executa-lo
npx nodemon server.js (nome do arquivo)
*/
