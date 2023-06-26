function validatingForm(event) {
    event.preventDefault();

    validation();
}

function validation() {
    clearError('mailid');
    clearError('password');

    var emailAddressInput = document.getElementById('mailid');
    var passwordInput = document.getElementById('password');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!(regexEmail.test(emailAddressInput.value))) {
        displayError('mailid', 'Email should be in correct format');
    } else if (emailAddressInput.value === "") {
        displayError('mailid', 'Email should not be empty');
    }

    if (passwordInput.value === "") {
        displayError('password', 'Password should not be empty');
    }

    function displayError(fieldName, errorMessage) {
        document.getElementById(fieldName + 'error').textContent = errorMessage;
    }

    function clearError(fieldName) {
        document.getElementById(fieldName + 'error').textContent = "";
    }

    document.getElementById('mailid').addEventListener('input', function () {
        clearError('mailid');
    })

    document.getElementById('password').addEventListener('input', function () {
        clearError('password');
    })
}