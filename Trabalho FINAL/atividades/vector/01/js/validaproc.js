function validaProc() {
    let num = [];

  
    for (let i = 0; i < 3; i++) {
        num[i] = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    }

   
    console.log("=== TODAS AS NOTAS ===");
    for (let i = 0; i < num.length; i++) {
        console.log("Nota " + (i + 1) + ": " + num[i]);
    }


    console.log("=== NOTAS MAIORES OU IGUAIS A 7,5 ===");
    let encontrou = false;
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 7.5) {
            console.log("Nota " + (i + 1) + ": " + num[i]);
            encontrou = true;
        }
    }

  
    if (!encontrou) {
        console.log("Nenhuma nota maior ou igual a 7,5 encontrada.");
    }
}
