(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const petalsContainer = document.getElementById('petals');
  const envelope = document.getElementById('envelope');
  const scene = document.getElementById('scene');
  const reveal = document.getElementById('reveal');

  /* ---------- ambient falling petals ---------- */
  function spawnPetal(burst = false) {
    const petal = document.createElement('div');
    const colors = ['pink', 'pink', 'white', 'gold'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    petal.className = `petal ${color}`;

    const size = 8 + Math.random() * 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 0.8}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.setProperty('--drift', `${(Math.random() - 0.5) * 160}px`);

    const duration = burst ? 3 + Math.random() * 2 : 7 + Math.random() * 6;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = burst ? `${Math.random() * 0.4}s` : `${Math.random() * 6}s`;

    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), (duration + 1) * 1000);
  }

  if (!prefersReducedMotion) {
    for (let i = 0; i < 14; i++) spawnPetal();
    setInterval(() => spawnPetal(), 900);
  }

  function petalBurst() {
    if (prefersReducedMotion) return;
    for (let i = 0; i < 26; i++) {
      setTimeout(() => spawnPetal(true), i * 60);
    }
  }

  /* ---------- envelope unfold sequence ---------- */
  let opened = false;

  function openGift() {
    if (opened) return;
    opened = true;
    envelope.classList.add('open');
    envelope.setAttribute('aria-disabled', 'true');

    const openDuration = prefersReducedMotion ? 200 : 1500;

    setTimeout(() => {
      scene.classList.add('hide');
      reveal.classList.add('show');
      reveal.removeAttribute('aria-hidden');
      petalBurst();
    }, openDuration);
  }

  envelope.addEventListener('click', openGift);
})();
