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
        languageLink.textContent = "বাংলা"
    }
    else {
        loadLanguage("bn");
        languageLink.textContent = "English"
    }
});

// Loads the default language when the page loads
loadLanguage('en');

function dropOverlay(){
    console.log(document.getElementById("navbarSupportedContent").classList.contains("visible"))
    if (document.getElementById("navbarSupportedContent").classList.contains("visible")){
        document.getElementById("burger-overlay").classList.remove("burger-overlay");
        removeClass()
    }else{
        addClass()
        document.getElementById("burger-overlay").classList.add("burger-overlay");
    }

}

function addClass(){
    document.getElementById("navbarSupportedContent").classList.add("visible");
}

function removeClass(){
    document.getElementById("navbarSupportedContent").classList.remove("visible");
}