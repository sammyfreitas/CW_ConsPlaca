//consultarPlaca.js: arquivo que contém a lógica para consultar a placa usando a biblioteca sinesp-api.

const sinespApi = require('sinesp-api');

async function consultarPlaca(placa) {
    try {
        const resultado = await sinespApi.search(placa);
        return resultado;
    } catch (erro) {
        console.error('Erro ao consultar a placa:', erro);
        throw erro;
    }
}

module.exports = consultarPlaca;
