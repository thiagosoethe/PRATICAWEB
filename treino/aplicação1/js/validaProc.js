function validaPrfunction validaProc(){
    
    if(document.frmnumero.txtnum1.value==""){
        alert("campo do nome nao foi preenchido");
        document.frmnumero.txtnum1.focus();
        return false;
    }else if(document.frmnumero.txtfone.value==""){
        alert("campo do telefone não foi preenchido");
        document.frmnumero.txtnum2.focus();
        return false;

    }

}