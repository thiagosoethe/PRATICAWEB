function cvalidaProc() {
    while (true) {
        let peso = parseFloat(prompt("Digite seu peso (em kg):"));
        let altura = parseFloat(prompt("Digite sua altura (em cm):"));

        if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            continue;
        }

        let imc = peso / (altura * altura);
        alert(`Seu IMC é: ${imc.toFixed(2)}`);

        let repetir = prompt("Deseja calcular o IMC novamente? (s/n):").toLowerCase();
        if (repetir !== "s") {
            alert("Obrigado por usar o sistema da SÓENGORDA LTDA!");
            break;
        }
    }
}


calcularIMCComRepeticao();