// Show welcome message on page load
window.addEventListener('load', function() {
  alert("Welcome to Ronnie Rabe's Website!");
});

// Scroll to the Contact section smoothly
const button = document.getElementById('scrollContactBtn');
if (button) {
  button.addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

