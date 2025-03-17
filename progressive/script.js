const submitForm = event => {
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    let error = '';
    if (emailField.value){
        if (!validateEmail(emailField.value)){
            error = 'Please enter a valid email address.';
        }
    } else {
        error = 'Please enter an email address.';
    }
    if (error){
        event.preventDefault();
        document.querySelector('#form-error').textContent = error;
    }
}

const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.querySelector('#contact-form').addEventListener('submit', submitForm);