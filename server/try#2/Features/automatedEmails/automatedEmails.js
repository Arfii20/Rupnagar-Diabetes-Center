const BASE = "http://localhost/"

const questionElement = document.getElementById('question-entry-text');

const inputFields = document.querySelectorAll('.inputBox input');
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

questionElement.addEventListener("input", function (e) {
    // this line may seem useless but its def needed
    questionElement.style.minHeight = "30px";
    questionElement.style.height = "auto";
    questionElement.style.height = `${questionElement.scrollHeight}px`;
});

questionElement.addEventListener('focus', (e)=>{
    questionElement.style.border = '2px solid #000'
} )

document.getElementById('question-submit-button').addEventListener('click', async function (event) {
    const form = document.getElementById('question-form');
    if (!form.reportValidity()) {
        event.preventDefault();
        return;
    }
    let valid = true;

    const firstNameElement = document.getElementById('question-first-name-input');
    const lastNameElement = document.getElementById('question-last-name-input');
    const ageElement = document.getElementById('question-age-input');
    const emailAddressElement = document.getElementById('question-email-input');
    const phoneNumberElement = document.getElementById('question-phone-input');
    const subjectElement = document.getElementById('question-subject-input');
    const descriptionElement = document.getElementById('question-how-can-we-help');

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const emailAddress = emailAddressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const subject = subjectElement.value;
    const description = descriptionElement.value;


    // Check age
    if (age > 0 && age < 110) {
        ageElement.style.border = '2px solid black';
    } else {
        ageElement.style.border = '2px solid red';
        valid = false;
    }

    // Check phone number
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

    const formBody=
        "Name: " + firstName + " " + lastName + "\n" +
        "Age: " + age + "\n" +
        "Email Address: " + emailAddress + "\n" +
        "Phone Number: " + phoneNumber + "\n" +
        "Description: " + description

    let emailData = {
        subject: subject,
        description: formBody
    };

    const response= await fetch(BASE + '/Features/automatedEmails/automatedEmails.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({function: 'sendQueryEmail', data: emailData})
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
});

const appointmentElement = document.getElementById('appointment-entry-text');

appointmentElement.addEventListener("input", function (e) {
    // this line may seem useless but its def needed
    appointmentElement.style.minHeight = "30px";
    appointmentElement.style.height = "auto";
    appointmentElement.style.height = `${appointmentElement.scrollHeight}px`;
});

appointmentElement.addEventListener('focus', (e)=>{
    appointmentElement.style.border = '2px solid #000'
} )


document.getElementById('appointment-submit-button').addEventListener('click', async function (event) {
    const form = document.getElementById('appointment-form');
    if (!form.reportValidity()) {
        event.preventDefault();
        return;
    }
    let valid = true;

    const firstNameElement = document.getElementById('appointment-first-name-input');
    const lastNameElement = document.getElementById('appointment-last-name-input');
    const ageElement = document.getElementById('appointment-age-input');
    const emailAddressElement = document.getElementById('appointment-email-input');
    const phoneNumberElement = document.getElementById('appointment-phone-input');
    const descriptionElement = document.getElementById('appointment-how-can-we-help');

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const emailAddress = emailAddressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const description = descriptionElement.value;


    // Check age
    if (age > 0 && age < 110) {
        ageElement.style.border = '2px solid black';
    } else {
        ageElement.style.border = '2px solid red';
        valid = false;
    }

    // Check phone number
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

    const formBody =
        "Name: " + firstName + " " + lastName + "\n" +
        "Age: " + age + "\n" +
        "Email Address: " + emailAddress + "\n" +
        "Phone Number: " + phoneNumber + "\n" +
        "Description: " + description

    let emailData = {
        subject: "Appointment",
        description: formBody
    };

    const response = await fetch(BASE + '/Features/automatedEmails/automatedEmails.php', {
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

function isValidNumber(phone_number) {
    const number = /^{[+]88}?0[0-9]{10}$|^0[0-9]{10}$/;
    return number.test(phone_number);
}

function setInputError(inputElement, errorMessage) {
    const inputElementGroup = inputElement.closest('.form__input-group');
    const errorElement = inputElementGroup.querySelector('.form__input-error-message');
    inputElementGroup.classList.add('form__input-group--error');
    errorElement.innerText = errorMessage;
}

function clearInputError(inputElement) {
    const inputElementGroup = inputElement.closest('.form__input-group');
    const errorElement = inputElementGroup.querySelector('.form__input-error-message');
    inputElementGroup.classList.remove('form__input-group--error');
    errorElement.innerText = '';
}
