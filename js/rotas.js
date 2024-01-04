//rotas.js: arquivo que define as rotas para o seu aplicativo Express, incluindo a rota para a consulta da placa.

const express = require('express');
const router = express.Router();
const consultarPlaca = require('./consultarPlaca');

router.get('/consulta-placa/:placa', async (req, res) => {
    try {
        const placa = req.params.placa;
        const resultado = await consultarPlaca(placa);
        res.json(resultado);
    } catch (erro) {
        res.status(500).send('Erro ao consultar a placa');
    }
});

module.exports = router;
