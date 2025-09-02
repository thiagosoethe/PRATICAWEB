function validaProc() {
  let vetorValores = [2, 4, 6, 8, 10];
  let vetorResultado = [];
  
  let valorUsuario = parseInt(prompt("Digite um valor inteiro para multiplicar:"));

  for (let i = 0; i < vetorValores.length; i++) {
      vetorResultado[i] = vetorValores[i] * valorUsuario;
  }
  
  let mensagem = "=== RESULTADOS DO CÁLCULO ===\n\n";
  for (let i = 0; i < vetorResultado.length; i++) {
      mensagem += "Posição " + i + ": " + vetorResultado[i] + "\n";
  }

  alert(mensagem);

  return false;
}