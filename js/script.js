document.getElementById('botao_consultar_placa').addEventListener('click', function() {
    var placa = document.getElementById('placaInput').value.toUpperCase();

    if (validarPlaca(placa)) {
        document.getElementById('resultado').innerHTML = 'Consultando...';
        buscarInformacoesVeiculo(placa);
    } else {
        alert('Por favor, digite uma placa válida.');
    }
});

function validarPlaca(placa) {
    // Padrão Antigo XXX0000 
    var padrao1 = /^[A-Z]{3}\d{4}$/;

    // Padrão Mercosul XXX0X00 
    var padrao2 = /^[A-Z]{3}\d[A-Z]\d{2}$/;

    return padrao1.test(placa) || padrao2.test(placa);
}

function buscarInformacoesVeiculo(placa) {
    const token = "SEU_TOKEN";
    const url = `https://wdapi2.com.br/consulta/${placa}/${token}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na consulta');
            }
            return response.json();
        })
        .then(data => {
            if (data.codigoSituacao === '0') {
                // Exibindo informações desejadas na página
                var resultadoHTML = `
                    <img src="${data.logo}" alt="Logo do Veículo"><br>
                    <strong>Ano:</strong> ${data.ano} / ${data.anoModelo}<br>
                    <strong>Marca:</strong> ${data.MARCA}<br>
                    <strong>Modelo:</strong> ${data.MODELO}<br>
                    <strong>Cor:</strong> ${data.cor}<br>
                    <strong>Município:</strong> ${data.municipio}<br>
                    <strong>UF:</strong> ${data.uf}<br>
                    <strong>Situação:</strong> ${data.situacao}<br>
                    <strong>Combustível:</strong> ${data.extra.combustivel}<br>
                    <strong>Origem:</strong> ${data.origem}<br>
                `;
                document.getElementById('resultado').innerHTML = resultadoHTML;
            } else {
                document.getElementById('resultado').innerHTML = 'Placa não encontrada ou erro na consulta.';
            }
        })
        .catch(error => {
            console.error('Erro na consulta:', error);
            document.getElementById('resultado').innerHTML = 'Erro na consulta da placa.';
        });
}
