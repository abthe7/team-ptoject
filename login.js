const identifierInput = document.getElementById("login-identifier");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateIdentifier() {
    const identifier = identifierInput.value.trim();
    const needsEmailValidation = identifier.includes("@");
    const hasValidEmailFormat = emailPattern.test(identifier);

    if (needsEmailValidation && !hasValidEmailFormat) {
        identifierInput.setCustomValidity("Enter a valid email address or use your username.");
        return;
    }

    identifierInput.setCustomValidity("");
}

identifierInput.addEventListener("input", validateIdentifier);
identifierInput.addEventListener("blur", validateIdentifier);
