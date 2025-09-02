function validaProc() {
    let matriz = [];
    let linhas = 3;
    let colunas = 3;

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let c = 0; c < colunas; c++) {
            const valor = parseInt(prompt(`Digite o valor da linha ${i} coluna ${c}:`));
            matriz[i][c] = isNaN(valor) ? 0 : valor;
        }
    }
    const multiplicador = parseInt(prompt("Digite o valor para multiplicar a matriz:"));
    const valorMultiplicador = isNaN(multiplicador) ? 1 : multiplicador;
    console.table(matriz);

    document.write("<h2>Matriz Original:</h2>");
    for (let i = 0; i < linhas; i++) {
        for (let c = 0; c < colunas; c++) {
            document.write(matriz[i][c] + "&nbsp;&nbsp;");
        }
        document.write("<br>");
    }
    document.write("<br>");

    document.write(`<h2>Matriz Multiplicada por ${valorMultiplicador}:</h2>`);
    for (let i = 0; i < linhas; i++) {
        for (let c = 0; c < colunas; c++) {
            
            const resultado = matriz[i][c] * valorMultiplicador;
            document.write(resultado + "&nbsp;&nbsp;");
        }
        document.write("<br>");
    }

    return false;
}
