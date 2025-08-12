// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      langButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const lang = this.getAttribute('data-lang');
      // In a real implementation, you would load translations here
      alert(`Language switched to ${lang === 'en' ? 'English' : 'Hausa'}. Full implementation would translate content.`);
    });
  });

  // Image lazy loading
  const lazyImages = document.querySelectorAll('img');
  
  const lazyLoad = function() {
    lazyImages.forEach(img => {
      if (img.getAttribute('data-src') && img.getBoundingClientRect().top < window.innerHeight + 100) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      }
    });
  };
  
  // Initial check
  lazyLoad();
  
  // Check on scroll and resize
  window.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
});