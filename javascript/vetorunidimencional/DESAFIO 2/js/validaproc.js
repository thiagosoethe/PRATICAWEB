function validaProc() {
  let vetor = [0, 1, 2, 2, 4, 5, 6, 7, 8, 9,]; 
  let valorBuscado = parseInt(prompt("Digite um valor inteiro para buscar no vetor:"));
  let posicaoEncontrada = -1;
  
  for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === valorBuscado) {
          posicaoEncontrada = i;
          break; 
      }
  }

 
  if (posicaoEncontrada !== -1) {
      alert("O valor " + valorBuscado + " foi encontrado na posição: " + posicaoEncontrada);
  } else {
      alert("O valor " + valorBuscado + " não foi encontrado no vetor.");
  }

  return false;
}