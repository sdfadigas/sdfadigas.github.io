const banco = firebase.firestore();
window.onload = function(){
banco.collection('resultadosTest').doc("teste").set({
      resultadoA1:0,
      resultadoA2:2,
      resultadoB1:6,
      resultadoB2:2,
      resultadoC1:0,
      resultadoC2:2,
      resultadoD1:1,
      resultadoD2:1,
      resultadoE1:0,
      resultadoE2:0,
      resultadoF1:4,
      resultadoF2:1
    })}
