//CLIQUE AQUI PARA COMEÇAR
var initialBtn = document.getElementById('initialBtn');
var user = firebase.auth().currentUser;
initialBtn.addEventListener('click', function () {
    if (user) {
        window.location.href="welcome.html";
    }else{
        window.location.href="login.html";
    }
})


