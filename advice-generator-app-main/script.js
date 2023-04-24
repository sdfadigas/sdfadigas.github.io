<<<<<<< HEAD

const diceBtn = document.getElementById("diceBnt");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");


diceBtn.addEventListener("click", function () {
    showQuote();
});


function showQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => data.slip)
        .then((data) => {
            adviceNum.textContent = data.id;
            adviceText.textContent = data.advice;
        })

=======

const diceBtn = document.getElementById("diceBnt");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");


diceBtn.addEventListener("click", function () {
    showQuote();
});


function showQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => data.slip)
        .then((data) => {
            adviceNum.textContent = data.id;
            adviceText.textContent = data.advice;
        })

>>>>>>> 1eee2626bb84b9c6379e941c86b97d766cbb11fb
}