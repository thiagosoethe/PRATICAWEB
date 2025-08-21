function validaProc() {

    let matriz = [];
    let linhas = 2;
    let colunas = 3;

    let contador = 1;
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = contador;
            contador++;
        }
    }
    console.log("=== MATRIZ 2x3 ===");
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            console.log(`Posição [${i}][${j}]: ${matriz[i][j]}`);
        }
    }

    return false; 
}