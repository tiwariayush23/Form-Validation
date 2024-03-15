document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if(usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        } else {
            setSuccessFor(username);
        }

        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }

        if(passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }

        if(password2Value === '') {
            setErrorFor(password2, 'Password confirmation cannot be blank');
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords do not match');
        } else {
            setSuccessFor(password2);
        }
    }

    function setErrorFor(input, message) {
        const formInput = input.parentElement;
        const small = formInput.querySelector('small');
        formInput.className = 'form-input error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formInput = input.parentElement;
        formInput.className = 'form-input success';
    }

    function isEmail(email) {
        // Basic email validation, you can improve it as needed
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
