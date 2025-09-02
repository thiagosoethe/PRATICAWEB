function validaProc(){
    let somatoria = 0;
    do{

        numero = parseInt(prompt("Digite o numero"));
        console.log("o numero informado é : "+numero);
        somatoria += numero;
        resposta = parseInt(prompt("Para sair digite o numero 0 ou outro para continuar : "))
    }while(resposta != 0);
    console.log("A somatoria dos numeros é : "+somatoria);
    return false;

}