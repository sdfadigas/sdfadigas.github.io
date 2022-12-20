//LOGIN GOOGLE
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const welcome = getElementbyId('welcome');
var authGoogleButton = document.getElementById('authGoogleButton');
authGoogleButton.addEventListener('click', function () {
    auth.signInWithPopup(provider);
})
auth.onAuthStateChanged((val) => {
    if (val) {
        console.log(auth.currentUser)
        localStorage.setItem("emailUser", auth.currentUser.email)
        window.location.href="welcome.html"
        welcome.innerText = ("Seja bem vinda(o)" + auth.currentUser.email)
    }
});





