// Counter Statistik
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});

// Efek Navbar Saat Scroll
window.addEventListener('scroll', function() {

  const nav = document.querySelector('nav');

  if(window.scrollY > 50) {
    nav.style.background = '#0F5132';
  } else {
    nav.style.background = 'rgba(15, 81, 50, 0.95)';
  }

});