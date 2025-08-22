function validaProc() {
    const tamanho = 5;

    let matrizOriginal = [];
    let matrizNova = [];

    console.log("=== Digite os valores para a Matriz Original ===");
    for (let i = 0; i < tamanho; i++) {
        matrizOriginal[i] = []; 
        matrizNova[i] = [];
        for (let j = 0; j < tamanho; j++) {

            let valorOriginal = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]:`));
            

            if (isNaN(valorOriginal)) {
                console.log(`Entrada inválida na posição [${i}][${j}]. Por favor, digite um número.`);

            }
            
            matrizOriginal[i][j] = valorOriginal;
            
            let valorNovo = valorOriginal * 2;
            matrizNova[i][j] = valorNovo;
        }
    }
    
    console.log("\n=== MATRIZ ORIGINAL ===");
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            console.log(`Posição [${i}][${j}]: ${matrizOriginal[i][j]}`);
        }
    }

    console.log("\n=== NOVA MATRIZ (VALORES DOBRADOS) ===");
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            console.log(`Posição [${i}][${j}]: ${matrizNova[i][j]}`);
        }
    }

    return false;
}