function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    // simple validation logic
    if (username === "") {
        document.getElementById("usernameError").textContent = "Campo obrigatório";
        return;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Campo obrigatório";
        return;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Campo obrigatório";
        return;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // if all fields are filled in , submit the form
    document.getElementById("registerForm").submit();
}
