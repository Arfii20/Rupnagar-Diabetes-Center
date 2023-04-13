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

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const emailAddress = emailAddressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const subject = subjectElement.value;
    const description = descriptionElement.value;

    // Check first name
    if (firstName === "") {
        setInputError(firstNameElement, 'Please enter First Name');
        return;
    }
    else{
        clearInputError(firstNameElement);
    }

    // Check last name
    if (lastName === "") {
        setInputError(lastNameElement, 'Please enter Last Name');
        return;
    }
    else{
        clearInputError(lastNameElement);
    }

    // Check age
    if (age === "") {
        setInputError(ageElement, 'Please enter age');
        return;
    }
    else if (0 < age < 110) {
        setInputError(ageElement, 'Invalid age');
        return;
    }
    else{
        clearInputError(ageElement);
    }

    // Check phone number
    if (phoneNumber === "") {
        setInputError(phoneNumberElement, 'Please enter phone number');
        return;
    }
    else if (!isValidNumber(phoneNumber)) {
        setInputError(phoneNumberElement, 'Invalid phone number format');
        return;
    }
    else{
        clearInputError(phoneNumberElement);
    }

    // Check description
    if (description === "") {
        setInputError(descriptionElement, 'Please enter some Description');
        return;
    }
    else{
        clearInputError(descriptionElement);
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

    const firstNameElement = form.querySelector('input[placeholder*="First Name"]');
    const lastNameElement = form.querySelector('input[placeholder*="Last Name"]');
    const ageElement = form.querySelector('input[placeholder*="Age"]');
    const emailAddressElement = form.querySelector('input[placeholder*="Email Address"]');
    const phoneNumberElement = form.querySelector('input[placeholder*="Number"]');
    const descriptionElement = form.querySelector('input[placeholder*="Description"]');

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const emailAddress = emailAddressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const description = descriptionElement.value;

    // Check first name
    if (firstName === "") {
        setInputError(firstNameElement, 'Please enter First Name');
        return;
    }
    else{
        clearInputError(firstNameElement);
    }

    // Check last name
    if (lastName === "") {
        setInputError(lastNameElement, 'Please enter Last Name');
        return;
    }
    else{
        clearInputError(lastNameElement);
    }

    // Check age
    if (age === "") {
        setInputError(ageElement, 'Please enter age');
        return;
    }
    else if (0 < age < 110) {
        setInputError(ageElement, 'Invalid age');
        return;
    }
    else{
        clearInputError(ageElement);
    }

    // Check phone number
    if (phoneNumber === "") {
        setInputError(phoneNumberElement, 'Please enter phone number');
        return;
    }
    else if (!isValidNumber(phoneNumber)) {
        setInputError(phoneNumberElement, 'Invalid phone number format');
        return;
    }
    else{
        clearInputError(phoneNumberElement);
    }

    const formBody=
        "Name: " + firstName + " " + lastName + "\n" +
        "Age: " + age + "\n" +
        "Email Address: " + emailAddress + "\n" +
        "Phone Number: " + phoneNumber + "\n" +
        "Description: " + description

    let emailData = {
        subject: "Appointment",
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

function isValidNumber(phone_number) {
    const number = /^[+]880[0-9]{10}$|^0[0-9]{10}$/;
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
