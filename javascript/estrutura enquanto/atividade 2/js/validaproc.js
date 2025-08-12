function validaProc() {
    let somatorio = 0;
    let i = 0;

    while (i < 3) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        somatorio += numero;
        i++;
    }

    console.log("O somatório dos números é: " + somatorio);
    return somatorio;
}

// Chamada da função
validaProc();