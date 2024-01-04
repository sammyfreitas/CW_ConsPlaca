document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('consultaBtn').addEventListener('click', function () {
        var placa = document.getElementById('placaInput').value;

		// Converter letras da placa para maiúsculas
        placa = placa.toUpperCase();

        if (validarPlaca(placa)) {
            buscarInformacoesVeiculo(placa);
        } else {
            alert('Por favor, digite uma placa válida.');
        }
    });
});

function validarPlaca(placa) {
    // Padrão XXX0000 (três letras e 4 números)
    var padrao1 = /^[A-Z]{3}\d{4}$/;

    // Padrão XXX0X00
    var padrao2 = /^[A-Z]{3}\d[A-Z]\d{2}$/;

    return padrao1.test(placa) || padrao2.test(placa);
}

function buscarInformacoesVeiculo(placa) {
    // Substituir esta parte pela chamada real à API ou serviço
    fetch(`/consulta-placa/${placa}`)
        .then(response => response.json())
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => {
            console.error('Erro na consulta:', error);
            mostrarResultado({ erro: 'Erro ao realizar a consulta.' });
        });
}

function mostrarResultado(data) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpar qualquer conteúdo anterior

    if (data.erro) {
        resultadoDiv.textContent = data.erro;
    } else {
        // Exemplo de exibição de informações (substituir por sua lógica)
        resultadoDiv.innerHTML = `
            <p>Fabricante: ${data.fabricante}</p>
            <p>Modelo: ${data.modelo}</p>
            <p>Ano: ${data.ano}</p>
            <p>Cor: ${data.cor}</p>
            <p>Espécie: ${data.especie}</p>
            <p>Tipo de Veículo: ${data.tipoVeiculo}</p>
            <p>UF da Jurisdição: ${data.ufJurisdicao}</p>
        `;
    }
}
