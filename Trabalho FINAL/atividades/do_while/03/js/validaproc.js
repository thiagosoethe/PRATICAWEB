function validaproc(){

    let soma=0, cont=0
    while(cont<3){
        cont++
        numero = parseInt(prompt("Digite o numero"));
        console.log("o numero informado é : "+ numero);
        
        
        if (numero % 5==0)
            {
                soma=numero+soma
            }

    }

        console.log("a somatoria dos numero é : "+soma);
        return false
}