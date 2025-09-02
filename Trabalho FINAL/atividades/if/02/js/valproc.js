function procFormulario() {

  if (document.fmrnotas.txtnum1.value == "") {
    alert("Preencha o campo nota 1");
    document.fmrnotas.txtnum1.focus();
    return false;
  } else if (document.fmrnotas.txtnum2.value == "") {
    alert("Preencha o campo nota 2");
    document.fmrnotas.txtnum2.focus();
    return false;
  }
  
  const num1 = parseFloat(document.fmrnotas.txtnum1.value);
  const num2 = parseFloat(document.fmrnotas.txtnum2.value);
  
  if (num1 > num2) {
    alert("Nota 1 é maior que nota 2");
  } else if (num2 > num1) {
    alert("Nota 2 é maior que nota 1");
  } else {
    alert("As notas são iguais");
  }
  
  return false;
}
