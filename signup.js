const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("show-password");

passwordToggle.addEventListener("change", () => {
    passwordInput.type = passwordToggle.checked ? "text" : "password";
});
