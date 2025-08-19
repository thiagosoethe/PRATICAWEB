function validaProc() {
  let vetor = [];
  const numValores = 4;


  for (let i = 0; i < numValores; i++) {
      let valor = parseInt(prompt(`Digite o valor ${i + 1} de ${numValores}:`));
      vetor.push(valor);
  }

  console.log("=== VETOR NA ORDEM INVERSA ===");


  for (let i = vetor.length - 1; i >= 0; i--) {
      console.log("Posição " + i + " : " + vetor[i]);
  }
  
  return false;
}