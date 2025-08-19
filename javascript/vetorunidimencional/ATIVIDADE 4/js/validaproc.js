function validaProc() {
    let num = [];
  
    for (let i = 0; i < 10; i++) {
      num[i] = i;
      console.log("na posicao " + i + " tem o numero " + num[i]);
    }
  
    console.log("\n\n\n");
  
    for (let i = 0; i < 10; i++) {
     
      if (i % 2 === 1) {
        console.log("na posicao " + i + " tem o numero " + num[i]);
      }
    }
  }
  