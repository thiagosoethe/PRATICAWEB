function validaProc() {
 
    let i;
 
    let num = [];
 
    for (i = 0; i < 3; i++) {

        num[i] = parseInt(prompt("Digite o número " + (i + 1)));

    }

    for (i = 0; i < 3; i++) {

        console.log("o valor de vetor num na posição " + i + " é : " + num[i]);
    }
    return false;
}