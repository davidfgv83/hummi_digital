// ── NAV: sombra al hacer scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── REVEAL: animar elementos al entrar en viewport ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── IGC: contador animado ──
const igcEl = document.getElementById('igcCounter');

const igcObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    let count = 0;
    const target = 73;
    const interval = setInterval(() => {
      count += 2;
      igcEl.textContent = count;
      if (count >= target) {
        igcEl.textContent = target;
        clearInterval(interval);
      }
    }, 30);
    igcObserver.disconnect();
  }
}, { threshold: 0.5 });

igcObserver.observe(igcEl);
