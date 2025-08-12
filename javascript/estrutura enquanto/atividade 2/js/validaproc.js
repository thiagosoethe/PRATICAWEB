function validaProc() {
    let maior = 0;
    let i = 0;
    let numero;

    while (i <3) {
        numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        console.log("o numeoro informado é: " + numero);
        if (numero > maior) {
            maior = numero;
        
    }
    i= i + 1;
    }

    console.log("O maior números foi: " + maior);
    return false;
}