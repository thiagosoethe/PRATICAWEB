function validaProc() {

    const linhas = 2;
    const colunas = 2;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let c = 0; c < colunas; c++) {
            let valor = parseInt(prompt(`Digite o valor para a posição [${i}][${c}]:`));
            matriz[i][c] = isNaN(valor) ? 0 : valor;
        }
    }
    let linhaDesejada = parseInt(prompt("Digite a linha que você quer somar (0 ou 1):"));


    if (isNaN(linhaDesejada) || linhaDesejada < 0 || linhaDesejada >= linhas) {
        console.log("Linha inválida. Por favor, digite 0 ou 1.");
        return;
    }
    let soma = 0;
    for (let c = 0; c < colunas; c++) {
        soma += matriz[linhaDesejada][c];
    }
    console.log(`A soma dos elementos da linha ${linhaDesejada} é: ${soma}`);
}


