import confetti from 'canvas-confetti';

const btn = document.getElementById('plumbing-btn');

btn.addEventListener('click', () => {
  // Change color (stays until reload)
  btn.classList.add('clicked');

  // Shake
  btn.classList.remove('shake');
  void btn.offsetWidth; // force reflow to restart animation
  btn.classList.add('shake');

  // Confetti from button center, behind the button
  const rect = btn.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 150,
    spread: 360,
    startVelocity: 25,
    origin: { x, y },
    zIndex: 5,
  });
});
