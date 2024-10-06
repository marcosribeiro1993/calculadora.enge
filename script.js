document.getElementById('barraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo valores do formulário
    const comprimentoAtual = parseFloat(document.getElementById('comprimentoAtual').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const espessura = parseFloat(document.getElementById('espessura').value);
    const pesoAtual = parseFloat(document.getElementById('pesoAtual').value);
    const pesoRemover = parseFloat(document.getElementById('pesoRemover').value);

    // Verifica se o peso a remover é válido
    if (pesoRemover <= 0 || pesoRemover > pesoAtual) {
        document.getElementById('resultado').innerHTML = "O peso a remover deve ser maior que 0 e menor que o peso total.";
        return;
    }

    // Calculando o volume total da barra
    const volumeTotal = comprimentoAtual * largura * espessura; // em mm³

    // Calculando o peso por unidade de volume (g/mm³)
    const pesoPorMm3 = pesoAtual / volumeTotal;

    // Calculando o volume que precisa ser removido para atingir o peso desejado
    const volumeRemover = pesoRemover / pesoPorMm3;

    // Calculando o comprimento que precisa ser removido
    const comprimentoRemover = volumeRemover / (largura * espessura);

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `
        Para remover ${pesoRemover} g da barra, você precisa cortar <strong>${comprimentoRemover.toFixed(2)} mm</strong>.
    `;
});
