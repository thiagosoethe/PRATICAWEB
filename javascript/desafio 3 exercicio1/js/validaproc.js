function validaProc() {
    let num1 = document.frmnumero.txtnum1.value;
    let num2 = document.frmnumero.txtnum2.value;

    if (num1 === "" || isNaN(num1)) {
        alert("Por favor, preencha corretamente o campo Número 1.");
        document.frmnumero.txtnum1.focus();
        return false;
    }
    if (num2 === "" || isNaN(num2)) {
        alert("Por favor, preencha corretamente o campo Número 2.");
        document.frmnumero.txtnum2.focus();
        return false;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let somaCorreta = num1 + num2;

    let tentativa;
    do {
        tentativa = parseFloat(prompt(`Qual é a soma de ${num1} + ${num2}?`));
        if (tentativa !== somaCorreta) {
            alert("Tente novamente");
        }
    } while (tentativa !== somaCorreta);

    alert("Resultado correto!");
    return false; 
}
