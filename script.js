// Scroll animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 400;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  });
  
  // Simple Contact Form Handler
  function contactFormSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
  
    alert(`Thank you, ${name}! We'll be in touch soon.`);
    return false; // prevent actual form submission for demo
  }
  