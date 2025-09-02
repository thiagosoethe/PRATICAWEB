function validaProc() {
   
    let alunos;
    do {
        alunos = document.frmEscola.txtalunos.value;
        if (alunos === "" || alunos <= 0) {
            alert("Informe a quantidade de alunos por turma");
            document.frmEscola.txtalunos.focus();
            return false;
        }
    } while (false);

    let medias = [];
    for (let i = 1; i <= 3; i++) {
        let mediaTurma = document.getElementById("turma" + i).value;
        if (mediaTurma === "") {
            alert("Preencha a média da Turma " + i);
            document.getElementById("turma" + i).focus();
            return false;
        }
        medias.push(parseFloat(mediaTurma));
    }

    let turmasAprovadas = 0;
    let somaMedias = 0;

    for (let media of medias) {
        somaMedias += media;
        if (media >= 7) {
            turmasAprovadas++;
        }
    }

    let mediaGeral = somaMedias / 3;

    alert(
        "Quantidade de turmas com média >= 7 é: " + turmasAprovadas +
        "\nMédia geral da escola: " + mediaGeral.toFixed(2)
    );

    return false;
}
