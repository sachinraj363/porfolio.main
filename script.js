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

  // Additional functionality (like theme toggle) can also be added here
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.body.setAttribute('data-theme', currentTheme);
  themeToggleBtn.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.body.setAttribute('data-theme', currentTheme);
  themeToggleBtn.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});