function validaProc() {
    const linhas = 4;
    const colunas = 5;

    let matriz = [];
    let somaTotal = 0;
    let somaLinha = 0;
    
    console.log("=== MATRIZ 4x5 ===");
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        
        for (let c = 1; c < colunas; c++) {

            const valor = parseInt(prompt(`Digite o valor da linha ${i} coluna ${c}:`));
            matriz[i][c] = valor;
            if (isNaN(valor)) {
                console.error("Valor inválido. Por favor, insira um número.");
                return false;
            }
            somaLinha += valor;
            somaTotal += valor;

            console.log(`Posição [${i}][${c}]: ${matriz[i][c]}`);
        }
        
        console.log(`Soma da Linha ${i + 1}: ${somaLinha}`);
    }

    console.log("\n--- RESULTADO FINAL ---");
    console.log(`Soma de todos os elementos da matriz: ${somaTotal}`);

    return false;
}