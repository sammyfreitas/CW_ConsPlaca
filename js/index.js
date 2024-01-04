//index.js: arquivo principal onde você importa e usa as rotas.

const express = require('express');
const rotas = require('./rotas');

const app = express();

// Configuração do servidor

app.use(rotas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
