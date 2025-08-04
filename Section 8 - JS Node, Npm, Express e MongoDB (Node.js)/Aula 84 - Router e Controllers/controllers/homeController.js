exports.paginaInicial = (req, res) => {
  res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='nome'>
    <button>Enviar form</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Sou a nova rota de post");
};
