// Add any interactivity here if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add smooth scroll to anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  