
function validatingForm(event) {
    event.preventDefault();

    validation();
}

function validation() {
    clearError('firstname');
    clearError('lastname');
    clearError('dateofbirth');
    clearError('age');
    clearError('gender');
    clearError('phonenumber');
    clearError('address');
    clearError('state');
    clearError('city');
    clearError('username');
    clearError('password');
    clearError('confirmpassword');

    //getting inputs
    var firstNameInput = document.getElementById('firstname');
    var lastNameInput = document.getElementById('lastname');
    var dateOfBirthInput = document.getElementById('dateofbirth');
    var ageInput = document.getElementById('age');
    var genderInput = document.getElementById('gender');
    var phoneNumberInput = document.getElementById('phonenumber');
    var addressInput = document.getElementById('address');
    var stateInput = document.getElementById('state');
    var cityInput = document.getElementById('city');
    var userNameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var confirmpasswordInput = document.getElementById('confirmpassword');

    var regexForAlphabetsAndSpaces = /^[A-Za-z\s]+$/;
    var regexForTenDigitPhoneNumber = /^\d{10}$/;
    var regexForUserName = /^[a-zA-Z0-9\-@]+$/;
    var regexForPassword = /^[a-zA-Z0-9@-]{8,}$/;;

    if (firstNameInput.value === "") {
        displayError('firstname', 'First name should not be empty');
    } else if (!(regexForAlphabetsAndSpaces.test(firstNameInput.value))) {
        displayError('firstname', 'First name should contain only alphabets');
    }

    if (lastNameInput.value === "") {
        displayError('lastname', 'Last name should not be empty');
    } else if (!(regexForAlphabetsAndSpaces.test(lastNameInput.value))) {
        displayError('firstname', 'Last name should contain only alphabets');
    }

    if (dateOfBirthInput.value === "") {
        displayError('dateofbirth', 'Date of birth should not be empty');
    }

    if (calculateAge() < 18) {
        displayError('age', 'Age should be greater than 18');
    }

    if (genderInput.value === "Select") {
        displayError('gender', 'Gender should not be empty');
    }

    if (phoneNumberInput.value === "") {
        displayError('phonenumber', 'Phone number should not be empty');
    } else if (!(regexForTenDigitPhoneNumber.test(phoneNumberInput.value))) {
        displayError('phonenumber', 'Phone number should contain only ten digits');
    }

    if (addressInput.value === "") {
        displayError('address', 'Address should not be empty');
    }

    if (stateInput.value === "Select") {
        displayError('state', 'State should not be empty');
    }

    if (cityInput.value === "Select") {
        displayError('city', 'City should not be empty');
    }

    if (userNameInput.value === "") {
        displayError('username', 'User name should not be empty');
    } else if (!(regexForUserName.test(userNameInput.value))) {
        displayError('username', 'User name should only contain alphabets, - , @ and numbers only');
    }

    if (passwordInput.value === "") {
        displayError('password', 'Password should not be empty');
    } else if (!(regexForPassword.test(passwordInput.value))) {
        displayError('password', 'Password should have minimum 8 characters and only contain alphabets, - , @ and numbers only');
    }

    if (!(confirmpasswordInput.value === passwordInput.value)) {
        displayError('confirmpassword', 'Confirm password should match password');
    } else if (confirmpasswordInput.value === "") {
        displayError('confirmpassword', 'Confirm password should not be empty');
    }

    function displayError(fieldName, errorMessage) {
        document.getElementById(fieldName + 'error').textContent = errorMessage;
    }

    function clearError(fieldName) {
        document.getElementById(fieldName + 'error').textContent = "";
    }

    document.getElementById('firstname').addEventListener('input', function () {
        clearError('firstname');
    })

    document.getElementById('lastname').addEventListener('input', function () {
        clearError('lastname');
    })

    document.getElementById('dateofbirth').addEventListener('input', function () {
        clearError('dateofbirth');
    })

    document.getElementById('age').addEventListener('change', function () {
        clearError('age');
    })

    document.getElementById('gender').addEventListener('input', function () {
        clearError('gender');
    })

    document.getElementById('phonenumber').addEventListener('input', function () {
        clearError('phonenumber');
    })

    document.getElementById('address').addEventListener('input', function () {
        clearError('phonenumber');
    })

    document.getElementById('state').addEventListener('input', function () {
        clearError('state');
    })

    document.getElementById('city').addEventListener('input', function () {
        clearError('city');
    })

    document.getElementById('username').addEventListener('input', function () {
        clearError('username');
    })

    document.getElementById('password').addEventListener('input', function () {
        clearError('password');
    })

    document.getElementById('confirmpassword').addEventListener('input', function () {
        clearError('confirmpassword');
    })
}


function calculateAge() {
    var dateOfBirthInput = document.getElementById('dateofbirth');
    var dateOfBirthToDateFormat = new Date(dateOfBirthInput.value);
    var todayDate = new Date();

    var age = todayDate.getFullYear() - dateOfBirthToDateFormat.getFullYear();
    var monthDiff = todayDate.getMonth() - dateOfBirthToDateFormat.getMonth();
    if (monthDiff <= 0 || todayDate.getDate() < dateOfBirthToDateFormat.getDate()) {
        age--;
    }

    document.getElementById('age').value = age;

    if (age >= 18) {
        return age;
    }
    else {
        return 0;
    }
}

var stateOptions = [
    { key: 'Select', value: '---Select state---' },
    { key: 'TN', value: 'Tamil Nadu' },
    { key: 'KL', value: 'Kerala' },
    { key: 'KA', value: 'Karnataka' },
    { key: 'AP', value: 'Andhra Pradesh' },
    { key: 'MH', value: 'Maharashtra' }
];

function loadStateOptions() {
    var selectElement = document.getElementById('state');
    for (var i = 0; i < stateOptions.length; i++) {
        var option = document.createElement('option');
        option.value = stateOptions[i].key;
        option.textContent = stateOptions[i].value;
        selectElement.appendChild(option);
    }
}

var stateOptions = [
    { key: 'Select', value: '---Select state---' },
    { key: 'TN', value: 'Tamil Nadu' },
    { key: 'KL', value: 'Kerala' },
    { key: 'KA', value: 'Karnataka' },
    { key: 'AP', value: 'Andhra Pradesh' },
    { key: 'MH', value: 'Maharashtra' }
];

function loadStateOptions() {
    var selectElement = document.getElementById('state');
    for (var i = 0; i < stateOptions.length; i++) {
        var option = document.createElement('option');
        option.value = stateOptions[i].key;
        option.textContent = stateOptions[i].value;
        selectElement.appendChild(option);
    }
}

var citiesByState = {
    TN: ['Salem', 'Coimbatore', 'Chennai', 'Madurai', 'Trichy', 'Theni'],
    KL: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Kollam '],
    KA: ['Bangalore', 'Ballari', 'Mysore'],
    AP: ['Vijayawada', 'Guntur', 'Nellore'],
    MH: ['Mumbai', 'Pune', 'Nagpur']
};

function loadCities() {
    var stateSelect = document.getElementById('state');
    var citySelect = document.getElementById('city');
    var selectedState = stateSelect.value;

    citySelect.innerHTML = '';

    if (selectedState) {
        var cities = citiesByState[selectedState];
        for (var i = 0; i < cities.length; i++) {
            var option = document.createElement('option');
            option.value = cities[i];
            option.textContent = cities[i];
            citySelect.appendChild(option);
        }
    }
}

window.addEventListener('DOMContentLoaded', loadStateOptions);