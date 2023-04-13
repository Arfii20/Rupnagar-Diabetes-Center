const BASE = "http://localhost/"

async function sendQueryEmail(event) {
    event.preventDefault();
    const button= event.target;

    const form = button.closest('form');

    const firstNameElement = form.querySelector('input[placeholder*="First Name"]');
    const lastNameElement = form.querySelector('input[placeholder*="Last Name"]');
    const ageElement = form.querySelector('input[placeholder*="Age"]');
    const emailAddressElement = form.querySelector('input[placeholder*="Email Address"]');
    const phoneNumberElement = form.querySelector('input[placeholder*="Number"]');
    const subjectElement = form.querySelector('input[placeholder*="Subject"]');
    const descriptionElement = form.querySelector('input[placeholder*="Description"]');


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

    const response= await fetch(BASE + 'automatedEmails.php', {
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
}

async function sendAppointmentEmail(event) {
    event.preventDefault();
    const button= event.target;

    const form = button.closest('form');

    const firstName = form.querySelector('input[placeholder*="First Name"]');
    const lastName = form.querySelector('input[placeholder*="Last Name"]');
    const age = form.querySelector('input[placeholder*="Age"]');
    const emailAddress = form.querySelector('input[placeholder*="Email Address"]');
    const phoneNumber = form.querySelector('input[placeholder*="Number"]');
    const subject = form.querySelector('input[placeholder*="Subject"]');
    const description = form.querySelector('input[placeholder*="Description"]');

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

    const response= await fetch(BASE + 'automatedEmails.php', {
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
}

function isValidEmail(user_mail) {
    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(user_mail);
}

function isValidNumber(phone_number) {
    const number = /^[+]880[0-9]{10}/;
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