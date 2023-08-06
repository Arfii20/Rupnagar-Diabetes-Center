function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  let windowHeight = window.innerHeight;
  let revealPoint = 150;

  reveals.forEach(element => {
      let revealTop = element.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
          if (element.classList.contains('animate-fade-in')) {
              element.classList.add('fade-in');
          } else if (element.classList.contains('animate-slide-in-left')) {
              element.classList.add('slide-in-left');
          } else if (element.classList.contains('animate-slide-in-right')) {
            element.classList.add('slide-in-right');
        }

          element.classList.add('active');
      } else {
          element.classList.remove('active');
      }
  });
}

// Initial reveal when the page loads
reveal();

// Listen for scroll events and trigger reveal function
window.addEventListener('scroll', reveal);




// Function to fetch language file and update the page content
function loadLanguage(language) {
    fetch(`languages/${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Update the text content on the page
            const translatableElements = document.getElementsByClassName('translatable');
            for (let i = 0; i < translatableElements.length; i++) {
                const element = translatableElements[i];
                const key = element.dataset.key;
                element.textContent = data[key] || element.textContent;
            }
        })
        .catch(error => {
            console.error('Error loading language:', error);
        });
}

// Listen for language selection changes
const languageLink = document.getElementById('language-select');
languageLink.addEventListener('click', function(event) {
    const selectedLanguage = this.textContent.trim();
    if (selectedLanguage === "English") {
        loadLanguage("en");
        languageLink.textContent = "বাংলা"
    }
    else {
        loadLanguage("bn");
        languageLink.textContent = "English"
    }
});

// Loads the default language when the page loads
loadLanguage('en');

