// Show error message
function showError(input, message) {
    const errorSpan = input.parentElement.querySelector('.error');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
}

// Clear error message
function clearError(input) {
    const errorSpan = input.parentElement.querySelector('.error');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
}

// Form validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

// Get all input common_elements
    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

// Name validation
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else {
        clearError(nameInput);
    }

// Username validation
    if (usernameInput.value.trim() === '') {
        showError(usernameInput, 'Username is required');
        isValid = false;
    } else {
        clearError(usernameInput);
    }

// Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput);
    }

// Password validation (min 8 chars)
    if (passwordInput.value.trim().length < 8) {
        showError(passwordInput, 'Password must be at least 8 characters');
        isValid = false;
    } else {
        clearError(passwordInput);
    }

// Confirm password validation
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPasswordInput);
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}

// Attach form validation after the DOM has loaded
window.addEventListener('DOMContentLoaded', function() {document.getElementById('signupForm').addEventListener('submit', validateForm);});