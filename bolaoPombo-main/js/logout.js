//LOGOUT
logoutBtn.addEventListener('click', function logout() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("emailUser", undefined)
        window.location.href = "login.html";
    }).catch(function (error) {
        console.error(error);
    });
}) 