const BASE = "http://localhost/"

async function sendQueryEmail() {
    let data = {
        to: 'arefin.ahammed1@gmail.com',
        subject: 'About testing a feature of the site',
        description: 'Hello, Hope you are doing well. I am checking the system that will be associated for taking appointments by the people. Will be back to your soon. Regards, Arefin'
    };

    const response= await fetch(BASE + 'automatedEmails.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({function: 'sendQueryEmail', data: data})
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
}
