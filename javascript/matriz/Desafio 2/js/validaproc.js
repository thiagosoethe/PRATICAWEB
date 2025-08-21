function validaProc() {
    const linhas = 4;
    const colunas = 3;

    let matriz = [];
    let somaTotal = 0;
    
    console.log("=== MATRIZ 4x3 ===");
    for (let i = 0; i < linhas; i++) {
        matriz[i] = []; 
        for (let j = 0; j < colunas; j++) {

            let valor = parseFloat((Math.random() * 10).toFixed(2)); 
            matriz[i][j] = valor;
            
            somaTotal += valor;

            console.log(`Posição [${i}][${j}]: ${matriz[i][j]}`);
        }
    }

    console.log("\n--- RESULTADO DA SOMA ---");
    console.log(`A soma de todos os elementos da matriz é: ${somaTotal.toFixed(2)}`);

    return false;
}