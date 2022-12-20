//LOGIN VIA CADASTRO
var createUserBtn = document.getElementById('createUserBtn');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
createUserBtn.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem vindo ' + emailInput.value);
            window.location.href="welcome.html"
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
});

