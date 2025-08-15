function validaProc () {
    let totalSalario = 0;
    let totalIdade = 0;
    let totalPessoas = 0;

    let totalSalarioFeminino = 0;
    let totalFeminino = 0;

    let totalSalarioMasculino = 0;
    let totalMasculino = 0;

    while (true) {
        let entrada = prompt("Digite 'Finalizar' para encerrar ou pressione Enter para continuar:").toLowerCase();
        if (entrada === "finalizar") {
            break;
        }

        let idade = parseInt(prompt("Digite a idade:"));
        if (isNaN(idade) || idade <= 0) {
            alert("Por favor, insira uma idade válida.");
            continue;
        }

        let genero = prompt("Digite o gênero (M/F):").toUpperCase();
        if (genero !== "M" && genero !== "F") {
            alert("Por favor, insira um gênero válido (M ou F).");
            continue;
        }

        let salario = parseFloat(prompt("Digite o salário:"));
        if (isNaN(salario) || salario <= 0) {
            alert("Por favor, insira um salário válido.");
            continue;
        }

        totalSalario += salario;
        totalIdade += idade;
        totalPessoas++;

        if (genero === "F") {
            totalSalarioFeminino += salario;
            totalFeminino++;
        } else if (genero === "M") {
            totalSalarioMasculino += salario;
            totalMasculino++;
        }
    }

    let mediaSalario = totalPessoas > 0 ? totalSalario / totalPessoas : 0;
    let mediaIdade = totalPessoas > 0 ? totalIdade / totalPessoas : 0;
    let mediaSalarioFeminino = totalFeminino > 0 ? totalSalarioFeminino / totalFeminino : 0;
    let mediaSalarioMasculino = totalMasculino > 0 ? totalSalarioMasculino / totalMasculino : 0;

    alert(`Resultados:
    - Média de salário do grupo: ${mediaSalario.toFixed(2)}
    - Média de idade do grupo: ${mediaIdade.toFixed(2)}
    - Média de salário do gênero feminino: ${mediaSalarioFeminino.toFixed(2)}
    - Média de salário do gênero masculino: ${mediaSalarioMasculino.toFixed(2)}`);
}


coletarDados();
