function validaProc() {
    let somaDivisiveisPor5 = 0;
    let i = 0;

    while (i < 3) {
        numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro positivo:`));

        if (numero > 0) {
            if (numero % 5 == 0) {
                somaDivisiveisPor5 += numero;
            }
            i++;
        } else {
            alert("Por favor, insira apenas números inteiros positivos.");
        }
    }

    alert("A soma dos números divisíveis por 5 é: " + somaDivisiveisPor5);
    return false;
}