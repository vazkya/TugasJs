function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "mel" && password === "123") {
        window.location.href = 'looping.html';
    } else {
        document.getElementById("result").innerText = "username atau password salah ";
    }
}
