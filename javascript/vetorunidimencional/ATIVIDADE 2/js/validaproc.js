function validaProc() {
    let num = [];
    let totalAlunos = parseInt(prompt("Digite a quantidade de alunos:"));

    
    for (let i = 0; i < totalAlunos; i++) {
        num[i] = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
    }

   
    console.log("=== TODAS AS NOTAS ===");
    for (let i = 0; i < num.length; i++) {
        console.log("Aluno " + (i + 1) + ": " + num[i]);
    }

    
    console.log("=== NOTAS MAIORES OU IGUAIS A 7,5 ===");
    let contador = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 7.5) {
            console.log("Aluno " + (i + 1) + ": " + num[i]);
            contador++;
        }
    }

    
    console.log("Quantidade de notas >= 7,5: " + contador);
}
