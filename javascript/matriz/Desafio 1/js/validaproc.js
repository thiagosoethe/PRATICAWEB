function validaProc() {
    const andares = 6;
    const apartamentosPorAndar = 4;

    let rendas = [];
    let rendaTotal = 0;
    
    let rendaInicial = 1500; 

    console.log("=== RENDAS POR APARTAMENTO ===");
    for (let i = 0; i < andares; i++) {
        rendas[i] = [];
        for (let j = 0; j < apartamentosPorAndar; j++) {

            let rendaApartamento = rendaInicial + (i * 100) + (j * 50);
            rendas[i][j] = rendaApartamento;
            rendaTotal += rendaApartamento;


            console.log(`Andar ${i + 1}, Apto ${j + 1}: R$ ${rendaApartamento.toFixed(2)}`);
        }
    }

    const totalApartamentos = andares * apartamentosPorAndar;
    const rendaMedia = rendaTotal / totalApartamentos;

    console.log("\n--- RESULTADOS DO PRÉDIO ---");
    console.log(`Renda Total do Prédio: R$ ${rendaTotal.toFixed(2)}`);
    console.log(`Renda Média por Apartamento: R$ ${rendaMedia.toFixed(2)}`);

    return false;
}