function validaProc() {

    let num = [];
    for (let i = 0; i < 3; i++) {
        num[i] = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
        num


        console.log("todas notas");

        for (let i = 0; i < 3; i++) {
            console.log("valor de i: " + i);
        }
        console.log("notas maiores ou iguais a 7,5");

        for (i = 0; i < 3; i++) {
            if (num[i] >= 7.5) {
                console.log("nota maior ou igual a 7,5: " + num[i]);
            }
            if (num[i] < 7.5) {
                console.log("nota menor que 7,5: " + num[i]);
            }
        }
        return false;

    }
}