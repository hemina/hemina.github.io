// Custom cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let cx = 0, cy = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
});

function animateRing() {
  rx += (cx - rx) * 0.12;
  ry += (cy - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .rolemodel-card, .video-item, .book-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursorRing.style.width = '60px';
    cursorRing.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
  });
});

// Reveal on scroll
// Reveal on scroll - general
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (Array.from(revealEls).indexOf(entry.target) % 5));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => observer.observe(el));

// Timeline entries reveal
const tlEntries = document.querySelectorAll('.timeline-entry');
const tlObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      tlObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
tlEntries.forEach(el => tlObserver.observe(el));

// Handle photo display
const img = document.querySelector('.about-photo img');
