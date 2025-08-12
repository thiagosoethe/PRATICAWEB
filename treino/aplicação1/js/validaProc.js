function validaProc(){
    
    if(document.frmcad.txtnome.value==""){
        alert("campo do nome nao foi preenchido");
        document.frmcad.txtnome.focus();
        return false;
    }else if(document.frmcad.txtfone.value==""){
        alert("campo do telefone não foi preenchido");
        document.frmcad.txtfone.focus();
        return false;

    }

}