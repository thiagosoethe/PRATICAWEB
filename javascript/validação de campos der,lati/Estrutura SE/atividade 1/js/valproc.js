function procFormulario(){
    //Validação de campos

    if(document.fmrnotas.txtnum1.value==""){
       
        alert("Preencha o campo nota 1");
        document.fmrnotas.txtnum1.focus();
        return false;
        }else if(document.fmrnotas.txtnum2.value==""){

            alert("Preencha o campo nota 2");
            document.fmrnotas.txtnum2.focus();
            return false;
            }else if(document.fmrnotas.txtnum3.value==""){

                alert("Preencha o campo nota 3");
                document.fmrnotas.txtnum3.focus();
                return false;
                }else{



                     //Processamente do programa......
                     
                     let nota1 = parseFloat (document.getElementById('num1').value);
                    
                     let nota2 = parseFloat (document.getElementById('num2').value); 
                                     
                     let nota3 = parseFloat (document.getElementById('num3').value);
                     
                     let media = (nota1+nota2+nota3)/3;
                     if (media>=7.0){

                        alert("sua media foi " + media.toFixed(2) + "você foi aprovado");

                    }else if (media>=5.0){


                            alert("sua media foi " + media.toFixed(2) + "você está de recuperação");

                        }else {
                              alert("sua media foi " + media.toFixed(2) + "você foi reprovado");
                    
                              }
                }
            
    

}