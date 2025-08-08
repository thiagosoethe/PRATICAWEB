function validaProc(){

    if(document.frmnumero.txtnum.value== ""){
        alert("Preencha o campo Número");
        document.frmnumero.txtnum.focus();

        
        return false;

    }else{

            let nu=parseInt(document.getElementById("num").value);
            for(let i=1; i<=11; i++){
                console.log(nu + " x " + i + " = " + nu * i);
                
            }

            return false;
    }
}