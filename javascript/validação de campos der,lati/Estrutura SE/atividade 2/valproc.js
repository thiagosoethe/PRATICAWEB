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
        }   }
            if(document.fmrnotas.txtnum2.value < document.fmrnotas.txtnum1.value)
       
                {
                    alert("numero 1 maior que numero 2")

                    }else if (document.fmrnotas.txtnum2.value > document.fmrnotas.txtnum1.value)


                            alert("numero 2 maior que numero 1");

                        else {
                              alert("as notas sao iguais")
                              }
                
            
    


