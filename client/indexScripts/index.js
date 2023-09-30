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

// Function to toggle navigation overlay visibility
function dropOverlay() {
    // Check if the navigation overlay is currently visible
    if (document.getElementById("navbarSupportedContent").classList.contains("visible")) {
        // Remove the overlay and associated class
        document.getElementById("burger-overlay").classList.remove("burger-overlay");
        removeClass();
    } else {
        // Add the overlay and associated class
        addClass();
        document.getElementById("burger-overlay").classList.add("burger-overlay");
    }
}

// Function to add class for overlay visibility
function addClass() {
    document.getElementById("navbarSupportedContent").classList.add("visible");
}

// Function to remove class for overlay visibility
function removeClass() {
    document.getElementById("navbarSupportedContent").classList.remove("visible");
}
