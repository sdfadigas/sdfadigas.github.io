//LOGIN DE QUEM JÁ TÁ CADASTRADO
var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function () {
      alert('Bem vindo de volta' + emailInput.value);
      window.location.href = "welcome.html"
      localStorage.setItem("emailUser", auth.currentUser.email)
    })
    .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao cadastrar, verifique o erro no console.')
    });
});

