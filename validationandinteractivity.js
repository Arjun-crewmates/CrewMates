// JavaScript for form validation and interactivity for a currency converter

// Select form elements
const form = document.querySelector('#currencyConverterForm');
const emailInput = document.querySelector('#email');
const amountInput = document.querySelector('#amount');
const currencySelect = document.querySelector('#currency');
const passwordInput = document.querySelector('#password');
const errorMessages = document.querySelectorAll('.error-message');
const resultField = document.querySelector('#result');

// Validation rules
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePasswordStrength = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
};

const validateAmount = (amount) => {
    return !isNaN(amount) && amount > 0;
};

// Dynamic error messages
const showError = (input, message) => {
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
};

const clearError = (input) => {
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }
};

// Live input feedback
emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
    } else {
        clearError(emailInput);
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePasswordStrength(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 8 characters long, with uppercase, lowercase, a number, and a special character.');
    } else {
        clearError(passwordInput);
    }
});

amountInput.addEventListener('input', () => {
    if (!validateAmount(amountInput.value)) {
        showError(amountInput, 'Please enter a valid amount greater than 0.');
    } else {
        clearError(amountInput);
    }
});

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate email
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate password
    if (!validatePasswordStrength(passwordInput.value)) {
        showError(passwordInput, 'Password must be strong.');
        isValid = false;
    }

    // Validate amount
    if (!validateAmount(amountInput.value)) {
        showError(amountInput, 'Amount must be greater than 0.');
        isValid = false;
    }

    // Validate currency selection
    if (currencySelect.value === '') {
        showError(currencySelect, 'Please select a currency.');
        isValid = false;
    } else {
        clearError(currencySelect);
    }

    if (isValid) {
        // Perform currency conversion (dummy logic for demonstration)
        const conversionRate = 1.2; // Example rate
        const convertedAmount = (amountInput.value * conversionRate).toFixed(2);

        resultField.textContent = `Converted Amount: $${convertedAmount}`;
        resultField.style.display = 'block';
    } else {
        resultField.style.display = 'none';
    }
});
