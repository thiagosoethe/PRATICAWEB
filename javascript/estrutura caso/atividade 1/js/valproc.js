    function procFormulario() {
        if(document.frmnumint.txtnumint.value=="") 
        {
            alert("preencha o campo numero inteiro");
            document.frmnumint.focus();
            return false;
        }else
        {

                let numint=parseInt(document.getElementById('numint').value);
                switch(true)
                {
                    case(numint>=0 && numint<=3):
                        console.log("Bebê");
                        return false
                        break;

                    case(numint>=4 && numint<=10):
                        console.log("Criança");
                        return false
                        break;

                    case(numint>=11 && numint<=18):
                        console.log("Adolescente");
                        return false
                        break;
                    default:
                        console.log("Adulto");
                        return false
                        break;
                        





            
                    /*case 0:
                    case 1:
                    case 2:
                    case 3:
                       // alert("Bebê");
                       console.log("Bebê");
                       return false
                    break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        console.log("Criança");
                        return false
                    break;
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        console.log("Adolescente");
                        return false
                    break;
                    default:
                        console.log("Adulto");
                        return false
                    break;*/
            




                }

        }
    }
  