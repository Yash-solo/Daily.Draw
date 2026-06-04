const email = document.querySelector('.login-inputs-email');
const password = document.querySelector('.login-inputs-password');

const validateLogin = () => {
    if (email.value === '') {
        alert('Please enter your email address');
    } else if (password.value === '') {
        alert('Please enter your password');
    } else {
        alert('Login successful');
        window.location.href = 'index.html';
    }
};
