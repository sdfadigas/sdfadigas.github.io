const simulacaoA1 = document.getElementById("simulacaoA1")
const simulacaoA2 = document.getElementById("simulacaoA2")
const simulacaoB1 = document.getElementById("simulacaoB1")
const simulacaoB2 = document.getElementById("simulacaoB2")
const simulaBtn = document.getElementById("simulaBtn");

simulaBtn.addEventListener('click',function(){
    if (simulacaoA1.value == simulacaoB1.value && simulacaoA2.value == simulacaoB2.value ){
        alert('Você acertou e ganhou 3 pontos :D')
    }else {
        alert("Você errou e não ganhou nada :(")
    }
})
