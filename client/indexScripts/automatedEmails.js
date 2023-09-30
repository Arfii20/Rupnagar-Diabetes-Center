// Get the element for the question input textarea
const questionElement = document.getElementById('question-entry-text');

// Get all input fields with the class 'inputBox' and attach event listeners to them
const inputFields = document.querySelectorAll('.inputBox input');

// Add event listeners for input fields (for adding and removing classes)
inputFields.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            this.parentElement.classList.add('has-content');
        } else {
            this.parentElement.classList.remove('has-content');
        }
    });
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function () {
        this.parentElement.classList.remove('focused');
    });
});

// Automatically adjust the height of the question textarea based on its content
questionElement.addEventListener("input", function (e) {
    questionElement.style.minHeight = "30px";
    questionElement.style.height = "auto";
    questionElement.style.height = `${questionElement.scrollHeight}px`;
});

// Add a focus event listener to the question textarea for styling
questionElement.addEventListener('focus', (e) => {
    questionElement.style.border = '2px solid #000';
});

// Add a click event listener to the question-submit-button
document.getElementById('question-submit-button').addEventListener('click', async function (event) {
    // Get the form element
    const form = document.getElementById('question-form');

    // Check if the form is valid using HTML5 form validation
    if (!form.reportValidity()) {
        event.preventDefault();
        return;
    }

    // Initialize a variable to track form validity
    let valid = true;

    // Get references to various input elements
    const firstNameElement = document.getElementById('question-first-name-input');
    const lastNameElement = document.getElementById('question-last-name-input');
    const ageElement = document.getElementById('question-age-input');
    const emailAddressElement = document.getElementById('question-email-input');
    const phoneNumberElement = document.getElementById('question-phone-input');
    const subjectElement = document.getElementById('question-subject-input');
    const descriptionElement = document.getElementById('question-how-can-we-help');

    // Retrieve values from input elements
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = parseInt(ageElement.value);
    const emailAddress = emailAddressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const subject = subjectElement.value;
    const description = descriptionElement.value;

    // Check age validity
    if (age <= 0 || age >= 110) {
        ageElement.style.border = '2px solid red';
        valid = false;
    } else {
        ageElement.style.border = '2px solid black';
    }

    // Validate phone number using a custom function (isValidNumber)
    if (!isValidNumber(phoneNumber)) {
        phoneNumberElement.style.border = '2px solid red';
        valid = false;
    } else {
        phoneNumberElement.style.border = '2px solid black';
    }

    // Check description validity
    if (description === "") {
        descriptionElement.style.border = '2px solid red';
        valid = false;
    } else {
        descriptionElement.style.border = '2px solid black';
    }

    // If any validation failed, return without submitting the form
    if (!valid) {
        return;
    }

    // Create a form body with user data
    const formBody =
        "Name: " + firstName + " " + lastName + "\n" +
        "Age: " + age + "\n" +
        "Email Address: " + emailAddress + "\n" +
        "Phone Number: " + phoneNumber + "\n" +
        "Description: " + description;

    // Prepare email data
    let emailData = {
        subject: subject,
        description: formBody
    };

    // Send a POST request to the server to send an email
    const response = await fetch('Features/automatedEmails/automatedEmails.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ function: 'sendQueryEmail', data: emailData })
    });

    // Check if the response was successful
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
});

// Get the element for the appointment input textarea
const appointmentElement = document.getElementById('appointment-entry-text');

// Adjust textarea height as content is typed
appointmentElement.addEventListener("input", function (e) {
    appointmentElement.style.minHeight = "30px";
    appointmentElement.style.height = "auto";
    appointmentElement.style.height = `${appointmentElement.scrollHeight}px`;
});

// Change border style when textarea is in focus
appointmentElement.addEventListener('focus', (e) => {
    appointmentElement.style.border = '2px solid #000';
});

// Add a click event listener to the appointment submit button
document.getElementById('appointment-submit-button').addEventListener('click', async function (event) {
    event.preventDefault();
    const form = document.getElementById('appointment-form');
    if (!form.reportValidity()) {
        event.preventDefault();
        return;
    }
    let valid = true;

    // Get form input elements
    const firstNameElement = document.getElementById('appointment-first-name-input');
    const lastNameElement = document.getElementById('appointment-last-name-input');
    const ageElement = document.getElementById('appointment-age-input');
    const emailAddressElement = document.getElementById('appointment-email-input');
    const phoneNumberElement = document.getElementById('appointment-phone-input');
    const descriptionElement = document.getElementById('appointment-how-can-we-help');

    // Get values from input elements
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = parseInt(ageElement.value);
    const emailAddress = emailAddressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const description = descriptionElement.value;

    // Check age
    if (age <= 0 || age >= 110) {
        ageElement.style.border = '2px solid red';
        valid = false;
    } else {
        ageElement.style.border = '2px solid black';
    }

    // Check phone number using a regular expression
    if (!isValidNumber(phoneNumber)) {
        phoneNumberElement.style.border = '2px solid red';
        valid = false;
    } else {
        phoneNumberElement.style.border = '2px solid black';
    }

    // Check description
    if (description === "") {
        descriptionElement.style.border = '2px solid red';
        valid = false;
    }
    else{
        descriptionElement.style.border = '2px solid black';
    }

    if (!valid) {
        return;
    }

    // Create a form body for email data
    const formBody =
        "Name: " + firstName + " " + lastName + "\n" +
        "Age: " + age + "\n" +
        "Email Address: " + emailAddress + "\n" +
        "Phone Number: " + phoneNumber + "\n" +
        "Description: " + description

    // Create email data object
    let emailData = {
        subject: "Appointment",
        description: formBody
    };

    // Send a POST request with email data
    const response = await fetch('Features/automatedEmails/automatedEmails.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({function: 'sendAppointmentEmail', data: emailData})
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
});

// Regular expression function to validate phone numbers
function isValidNumber(phone_number) {
    const number = /^{[+]88}?0[0-9]{10}$|^0[0-9]{10}$/;
    return number.test(phone_number);
}

// Function to set an error message for input elements
function setInputError(inputElement, errorMessage) {
    const inputElementGroup = inputElement.closest('.form__input-group');
    const errorElement = inputElementGroup.querySelector('.form__input-error-message');
    inputElementGroup.classList.add('form__input-group--error');
    errorElement.innerText = errorMessage;
}

// Function to clear error messages for input elements
function clearInputError(inputElement) {
    const inputElementGroup = inputElement.closest('.form__input-group');
    const errorElement = inputElementGroup.querySelector('.form__input-error-message');
    inputElementGroup.classList.remove('form__input-group--error');
    errorElement.innerText = '';
}
