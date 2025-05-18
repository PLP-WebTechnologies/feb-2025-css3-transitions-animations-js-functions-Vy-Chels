document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const body = document.body;
    const toggleBtn = document.getElementById('themeToggle');
    const statusText = document.getElementById('status');
    const accentColor = document.getElementById('accentColor');
    const counter = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const image = document.getElementById('animatedImage');
  
    // Initialize from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedColor = localStorage.getItem('accentColor') || '#007bff';
    const savedCount = localStorage.getItem('count') || '0';
  
    // Apply saved preferences
    body.classList.add(savedTheme);
    document.documentElement.style.setProperty('--accent-color', savedColor);
    accentColor.value = savedColor;
    counter.textContent = savedCount;
    updateStatus('Preferences loaded');
  
    // Theme toggle functionality
    toggleBtn.addEventListener('click', () => {
      const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
      body.classList.remove(currentTheme);
      body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      updateStatus(`Theme set to ${newTheme}`);
    });
  
    // Accent color picker
    accentColor.addEventListener('input', (e) => {
      const newColor = e.target.value;
      document.documentElement.style.setProperty('--accent-color', newColor);
      localStorage.setItem('accentColor', newColor);
      updateStatus('Accent color updated');
    });
  
    // Counter functionality
    incrementBtn.addEventListener('click', () => {
      const currentCount = parseInt(counter.textContent);
      const newCount = currentCount + 1;
      
      counter.textContent = newCount;
      localStorage.setItem('count', newCount);
      
      // Add animation class
      counter.classList.add('animate');
      setTimeout(() => counter.classList.remove('animate'), 500);
      
      updateStatus(`Counter incremented to ${newCount}`);
    });
  
    // Image animation
    image.addEventListener('click', () => {
      image.classList.remove('animate');
      void image.offsetWidth; // Trigger reflow
      image.classList.add('animate');
      updateStatus('Image animation triggered');
    });
  
    // Status update helper
    function updateStatus(message) {
      statusText.textContent = message;
      statusText.style.opacity = '1';
      setTimeout(() => {
        statusText.style.opacity = '0';
      }, 2000);
    }
  });
  