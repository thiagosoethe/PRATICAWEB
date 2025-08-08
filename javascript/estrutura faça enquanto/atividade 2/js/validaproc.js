function validaProc() {
    if(document.frmnumero.txtnum.value=="") {
        alert("Por favor, preencha o campo número.");
        document.frmnumero.txnum.focus();
        return false;
    }else{
        let nu=parseInt(document.getElementById('num').value);
        cont=1;
        console.log("Tabuada do numero "+nu);
        do{
            console.log(nu + " x " + cont + " = " + (nu * cont));
            cont=cont+1;

        }while(cont <= 10) 
        return false;

    }


}