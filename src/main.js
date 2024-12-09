const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à aplicação de testes com Node.js!</h1>');
  console.log('Alerta: A aplicação foi acessada!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});