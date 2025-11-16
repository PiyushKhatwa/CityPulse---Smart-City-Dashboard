const form = document.getElementById('feedback-form');
const successModal = document.getElementById('success-modal');
const closeSuccessBtn = document.getElementById('close-success');

function validateName(name) {
    return name.trim().length >= 3;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateCategory(category) {
    return category !== '';
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add('error');
    error.textContent = message;
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove('error');
    error.textContent = '';
}

function clearAllErrors() {
    ['name', 'email', 'category', 'message'].forEach(field => {
        clearError(field, `${field}-error`);
    });
}

document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim().length > 0) {
        clearError('name', 'name-error');
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (this.value.trim().length > 0) {
        clearError('email', 'email-error');
    }
});

document.getElementById('category').addEventListener('change', function() {
    if (this.value !== '') {
        clearError('category', 'category-error');
    }
});

document.getElementById('message').addEventListener('input', function() {
    if (this.value.trim().length > 0) {
        clearError('message', 'message-error');
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    clearAllErrors();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    if (!validateName(name)) {
        showError('name', 'name-error', 'Please enter a valid name (minimum 3 characters)');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!validateCategory(category)) {
        showError('category', 'category-error', 'Please select a category');
        isValid = false;
    }
    
    if (!validateMessage(message)) {
        showError('message', 'message-error', 'Please enter a message (minimum 10 characters)');
        isValid = false;
    }
    
    if (isValid) {
        successModal.style.display = 'block';
        form.reset();
    }
});

closeSuccessBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});