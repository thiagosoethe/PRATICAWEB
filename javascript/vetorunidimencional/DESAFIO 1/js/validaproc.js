function validaProc() {
  let vetorNotas1 = [];
  let vetorNotas2 = [];
  let vetorMedias = [];
  const numAlunos = 5;

 
  for (let i = 0; i < numAlunos; i++) {
      let nota1 = parseFloat(prompt(`Digite a 1ª nota do Aluno ${i + 1}:`));
      let nota2 = parseFloat(prompt(`Digite a 2ª nota do Aluno ${i + 1}:`));
      
      vetorNotas1[i] = nota1;
      vetorNotas2[i] = nota2;
  }
  for (let i = 0; i < numAlunos; i++) {
      vetorMedias[i] = (vetorNotas1[i] + vetorNotas2[i]) / 2;
  }
  let resultado = "=== Médias dos Alunos ===\n\n";
  for (let i = 0; i < numAlunos; i++) {
      resultado += `Aluno ${i + 1}:\n`;
      resultado += `  Nota 1: ${vetorNotas1[i].toFixed(2)}\n`;
      resultado += `  Nota 2: ${vetorNotas2[i].toFixed(2)}\n`;
      resultado += `  Média: ${vetorMedias[i].toFixed(2)}\n\n`;
  }

  alert(resultado);
}