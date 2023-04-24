const palpiteA1 = document.querySelector('#palpiteA1');
const palpiteA2 = document.querySelector('#palpiteA2');
const palpiteB1 = document.querySelector('#palpiteB1');
const palpiteB2 = document.querySelector('#palpiteB2');
const palpiteC1 = document.querySelector('#palpiteC1');
const palpiteC2 = document.querySelector('#palpiteC2');
const palpiteD1 = document.querySelector('#palpiteD1');
const palpiteD2 = document.querySelector('#palpiteD2');
const palpiteE1 = document.querySelector('#palpiteE1');
const palpiteE2 = document.querySelector('#palpiteE2');
const palpiteF1 = document.querySelector('#palpiteF1');
const palpiteF2 = document.querySelector('#palpiteF2');

//copiar e colar essas const de cima e mudar o nome pra #palpiteD1, #palpiteD2 e assim sucessivamente até completar 108 linhas
const submit = document.getElementById("submitBtn");
const banco = firebase.firestore();
const user = localStorage.getItem("emailUser")
const title = document.getElementById("title")
const subtitle = document.getElementById("subtitle")
const form = document.querySelectorAll('input[type=number]')

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    confirm("confirmar palpites?");
    console.log(localStorage.getItem("emailUser"))
    title.innerText = "MEUS PALPITES"
    subtitle.innerText = "confira seus palpites abaixo"
    submit.style.display = "none"
    
        //window.location.href="ranking.html";
    banco.collection('palpites').doc(user).set({
      palpiteA1: palpiteA1.value,
      palpiteA2: palpiteA2.value,
      palpiteB1: palpiteB1.value,
      palpiteB2: palpiteB2.value,
      palpiteC1: palpiteC1.value,
      palpiteC2: palpiteC2.value,
      palpiteD1: palpiteD1.value,
      palpiteD2: palpiteD2.value,
      palpiteE1: palpiteE1.value,
      palpiteE2: palpiteE2.value,
      palpiteF1: palpiteF1.value,
      palpiteF2: palpiteF2.value
    })
  });