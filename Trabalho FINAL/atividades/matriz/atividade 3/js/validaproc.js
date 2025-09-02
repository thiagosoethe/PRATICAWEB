function validaProc() {
    let matriz = [];
    const linhas = 2;
    const colunas = 2;

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = i + j;
        }
    }

    console.log("=== MATRIZ 2X2 ===");
    for (let i = 0; i < linhas; i++) {
        let linhaTexto = "";
        for (let j = 0; j < colunas; j++) {
            linhaTexto += matriz[i][j] + " ";
        }
        console.log(linhaTexto);
    }
    
    return false;
}