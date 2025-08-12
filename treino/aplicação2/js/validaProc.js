function validaProc() {

    if (document.frmcad.txtnum1.value == "") {
        alert("O numero 1 nao foi preenchido");
        document.frmcad.txtnum1.focus();
        return false;
    } else if (document.frmcad.txtnum2.value == "") {
        alert("O numero 2 nao foi preenchido");
        document.frmcad.txtnum2.focus();
        return false;
    } else if (document.frmcad.txtcalc.value == "") {
        alert("A operação não foi preenchido");
        document.frmcad.txtcalc.focus();
        return false;
    } else {

        let num1 = parseInt(document.frmcad.txtnum1.value);
        let num2 = parseInt(document.frmcad.txtnum2.value);
        let oper = document.frmcad.txtcalc.value;
        if (oper == "+") {
            let res = num1 + num2;
            alert("Resultado da soma de  " + num1 + " + " + num2 + " é :" + res);
        } else if (oper == "-") {
            let res = num1 - num2;
            alert("Resultado da subtração de " + num1 + " - " + num2 + " é :" + res);

        } else if (oper == "x") {
            let res = num1 * num2;
            alert("Resultado da multiplicação de " + num1 + " * " + num2 + " é : " + res);
        } else if (oper == "/") {

            if (num2 == 0) {
                alert("Divisão por zero não é permitida");
                document.frmcad.txtnum2.focus();
                return false;

            } else {
                let res = num1 / num2;

                alert("Resultado da divisão de " + num1 + " / " + num2 + " é : " + res);

            }

        }
    }


}
