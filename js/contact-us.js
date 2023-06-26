function validatingForm(event) {
    event.preventDefault();

    validation();
}

function validation() {

    clearError('name');
    clearError('mailid');

    var nameInput = document.getElementById('name');
    var emailAddressInput = document.getElementById('mailid');
    var companynameInput = document.getElementById('companyname');
    var messageInput = document.getElementById('message');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexForAlphabetsAndSpaces = /^[A-Za-z\s]+$/;
    var regexForTenDigitPhoneNumber = /^\d{10}$/;

    if (nameInput.value === "") {
        displayError('name', 'Name should not be empty');
    } else if (!(regexForAlphabetsAndSpaces.test(nameInput.value))) {
        displayError('name', 'Name should contain only alphabets');
    }

    if (!(regexEmail.test(emailAddressInput.value))) {
        displayError('mailid', 'Email should be in correct format');
    } else if (emailAddressInput.value === "") {
        displayError('mailid', 'Email should not be empty');
    }

    if (companynameInput.value === "") {
        displayError('companyname', 'Company nmae should not be empty');
    }

    if (messageInput.value === "") {
        displayError('messsage', 'Message should not be empty');
    }

    function displayError(fieldName, errorMessage) {
        document.getElementById(fieldName + 'error').textContent = errorMessage;
    }

    function clearError(fieldName) {
        document.getElementById(fieldName + 'error').textContent = "";
    }

    document.getElementById('name').addEventListener('input', function () {
        clearError('name');
    })

    document.getElementById('mailid').addEventListener('input', function () {
        clearError('mailid');
    })

    document.getElementById('companyname').addEventListener('input', function () {
        clearError('companyname');
    })

    document.getElementById('message').addEventListener('input', function () {
        clearError('message');
    })
}