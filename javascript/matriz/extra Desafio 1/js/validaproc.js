function validaProc() {
    let matriz = [];

    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = parseInt(prompt(document.forms[0]["m" + i + j].value));
        }
    }

    console.log("=== MATRIZ 4x4 ===");
    for (let i = 0; i < 4; i++) {
        console.log(matriz[i].join(" "));
    }

    console.log("=== DIAGONAL PRINCIPAL ===");
    for (let i = 0; i < 4; i++) {
        console.log(matriz[i][i]);
    }

    console.log("=== DIAGONAL SECUNDÁRIA ===");
    for (let i = 0; i < 4; i++) {
        console.log(matriz[i][3 - i]);
    }

    return false;
}
