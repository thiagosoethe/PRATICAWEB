function validaProc(){
    let somatoria = 0;
    let resposta=0
    while(resposta<3){

        numero = parseInt(prompt("Digite o numero"));
        console.log("o numero informado é : "+numero);
        somatoria += numero;
       resposta++
    }
    console.log("A somatoria dos numeros é : "+somatoria);
    return false;

}