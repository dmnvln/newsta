document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const images = Array.from(track.children);
  const btnPrev = document.querySelector('.carousel-btn.prev');
  const btnNext = document.querySelector('.carousel-btn.next');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  let current = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${current * 340}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  btnPrev.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
  });

  btnNext.addEventListener('click', () => {
    current = (current + 1) % images.length;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      updateCarousel();
    });
  });

  updateCarousel();
});
