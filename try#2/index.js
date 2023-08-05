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
