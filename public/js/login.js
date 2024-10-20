// Function to toggle password visibility
function toggleVisible(icon) {
    const inputField = icon.previousElementSibling;
    if (inputField.type === "password") {
        inputField.type = "text";
        icon.classList.remove("bx-hide");
        icon.classList.add("bx-show");
    } else {
        inputField.type = "password";
        icon.classList.remove("bx-show");
        icon.classList.add("bx-hide");
    }
}

// Show error message and add red border
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error-border');
}

// Clear error message and remove red border
function clearError(input, errorElement) {
    errorElement.style.display = 'none';
    input.classList.remove('error-border');
}

// Form validation logic
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get all input elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Get all error elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // Password validation (minimum 8 characters)
    if (passwordInput.value.trim().length < 8) {
        showError(passwordInput, passwordError, 'Password must be at least 8 characters');
        isValid = false;
    } else {
        clearError(passwordInput, passwordError);
    }

    // Confirm password validation (must match password)
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPasswordInput, confirmPasswordError);
    }

    // Submit form if valid
    if (isValid) {
        alert('Login successful!');
        // Here, you can allow form submission or redirect to another page.
    }
}

// Attach form validation event listener after the DOM has loaded
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);

// Background spans generation (your original function)
function generateSpans() {
    for (let i = 0; i <= 271; i++) {
        document.getElementById("spanGenerate").appendChild(document.createElement("span"));
    }
}