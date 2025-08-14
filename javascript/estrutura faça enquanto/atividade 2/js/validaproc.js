function validaProc() {
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let somaCorreta = numero1 + numero2;

    let resposta;
    do {
        resposta = parseFloat(prompt(`Qual é a soma de ${numero1} + ${numero2}?`));
        if (resposta !== somaCorreta) {
            alert("Tente novamente");
        }
    } while (resposta !== somaCorreta);

    alert("Resultado correto!");
    return false;
}