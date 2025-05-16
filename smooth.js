// Плавный fade-in при скролле
document.addEventListener("DOMContentLoaded", function () {
  const fadeElems = document.querySelectorAll('.fadein');
  function fadeOnScroll() {
    fadeElems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', fadeOnScroll);
  fadeOnScroll();
});

// Плавная прокрутка по меню
document.querySelectorAll('nav a[href^="#"], .cta[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
