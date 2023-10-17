// Function to reveal elements with animations when they are in the viewport
function reveal() {
    // Select all elements with the "reveal" class
    let reveals = document.querySelectorAll('.reveal');

    // Get the height of the browser window
    let windowHeight = window.innerHeight;

    // Define the point below the top of the viewport where animations trigger
    let revealPoint = 150;

    // Loop through all elements with the "reveal" class
    reveals.forEach(element => {
        // Get the top position of the element relative to the viewport
        let revealTop = element.getBoundingClientRect().top;

        // Check if the element is within the viewport
        if (revealTop < windowHeight - revealPoint) {
            // Add appropriate animation classes based on element's class
            if (element.classList.contains('animate-fade-in')) {
                element.classList.add('fade-in');
            } else if (element.classList.contains('animate-slide-in-left')) {
                element.classList.add('slide-in-left');
            } else if (element.classList.contains('animate-slide-in-right')) {
                element.classList.add('slide-in-right');
            }

            // Add the "active" class to trigger the animation
            element.classList.add('active');
        } else {
            // Remove the "active" class if element is outside the viewport
            element.classList.remove('active');
        }
    });
}

// Initial reveal when the page loads
reveal();

// Listen for scroll events and trigger the reveal function
window.addEventListener('scroll', reveal);

// Function to fetch language file and update the page content
function loadLanguage(language) {
    fetch(`languages/${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Update the text content and innerHTML on the page
            const translatableElements = document.getElementsByClassName('translatable');
            for (let i = 0; i < translatableElements.length; i++) {
                const element = translatableElements[i];
                const key = element.dataset.key;
                const value = data[key];
                if (value !== undefined) {
                    element.innerHTML = value;
                }
            }
        })
        .catch(error => {
            console.error('Error loading language:', error);
        });
}

// Listen for language selection changes
const languageLink = document.getElementById('language-select');
languageLink.addEventListener('click', function(event) {
    event.preventDefault();
    const selectedLanguage = this.textContent.trim();
    if (selectedLanguage === "English") {
        loadLanguage("en");
        document.body.style.fontFamily = "Roboto, sans-serif";
        languageLink.textContent = "বাংলা";
    } else {
        loadLanguage("bn");
        document.body.style.fontFamily = "Tiro Bangla, serif";
        languageLink.textContent = "English";
    }
});

// Loads the default language when the page loads
loadLanguage('en');


// Listen for click events on the burger menu
document.body.addEventListener('click', closeNavbar);
document.body.addEventListener('touchstart', closeNavbar);

// Function to close the navbar
function closeNavbar(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');

    // Check if the navbar is open and the click/touch target is not within the navbar or toggle button
    if (navbar.classList.contains('show') &&
        !navbar.contains(event.target) &&
        !toggleButton.contains(event.target)) {
        // Close the navbar
        toggleButton.click();
    }
}

// Function to preload content from another HTML page
async function preloadContent() {
    try {
        const response = await fetch('./gallery/gallery.html'); // Replace with the URL of the other page
    } catch (error) {
        console.error('Error preloading content:', error);
    }
}

// Call the preloadContent function 5 seconds after the page loads
window.addEventListener('load', preloadContent);