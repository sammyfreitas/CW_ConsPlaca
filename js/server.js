//server.js: arquivo principal que inicia o servidor e configura o Express.

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configuração para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Rotas
app.get('/consulta-placa/:placa', async (req, res) => {
    try {
        const placa = req.params.placa;
        const resultado = await consultarPlacas(placa); // Lembre-se de importar a função consultarPlacas
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
