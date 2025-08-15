function validaProc() {
    //Declarando a variavel controladora i
    let i;
    //declarando o vetor
    let num = [];
    //alimentando o vetor com dados
    for (i = 0; i < 3; i++) {

        num[i] = parseInt(prompt("Digite o número " + (i + 1)));

    }
    //retirando os valores de cada posição do vetor.
    for (i = 0; i < 3; i++) {

        console.log("o valor de vetor num na posição " + i + " é : " + num[i]);
    }
    return false;
}