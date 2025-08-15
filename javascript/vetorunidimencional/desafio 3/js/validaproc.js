function validaProc() {
    let vetor = [];

    for (let i = 0; i < 10; i++) {
        vetor[i] = i * i;
    }

    console.log("=== VETOR DE QUADRADOS ===");
    for (let i = 0; i < vetor.length; i++) {
        console.log("Posição " + i + " : " + vetor[i]);
    }
}

