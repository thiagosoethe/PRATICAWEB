function calculadora() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operacao').value;
    const resultArea = document.getElementById('result-area');

    // Limpar resultados anteriores
    resultArea.innerHTML = '';

    // Validação de entrada dos numeros
    if (isNaN(num1) || isNaN(num2)) {
        resultArea.innerHTML = '<p style="color: red;">Por favor, insira números válidos.</p>';
        return;
    }

    let result;
    let operationText = ''; // Para armazenar a representação textual da operação

    switch (operation) {
        case 'soma':
            result = num1 + num2;
            operationText = 'Soma';
            break;
        case 'subtracao':
            result = num1 - num2;
            operationText = 'Subtração';
            break;
        case 'multiplicacao':
            result = num1 * num2;
            operationText = 'Multiplicação';
            break;
        case 'divisao':
            if (num2 === 0) {
                resultArea.innerHTML = '<p style="color: red;">Não é possível dividir por zero.</p>';
                return;
            }
            result = num1 / num2;
            operationText = 'Divisão';
            break;
        default:
            resultArea.innerHTML = '<p style="color: red;">Operação inválida.</p>';
            return;
    }

    const parity = (result % 2 === 0) ? 'Par' : 'Ímpar';

    resultArea.innerHTML += `<p><strong>Operação escolhida:</strong> ${operationText}</p>`;
    resultArea.innerHTML += `<p><strong>Números digitados:</strong> ${num1} e ${num2}</p>`;
    resultArea.innerHTML += `<p><strong>Resultado:</strong> ${result}</p>`;
    resultArea.innerHTML += `<p><strong>O resultado é:</strong> ${parity}</p>`;
}