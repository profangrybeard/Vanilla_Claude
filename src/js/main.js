const narrator = document.getElementById('narrator');
const stage = document.getElementById('stage');
const face = document.getElementById('claude-face');
const credits = document.getElementById('credits');

const claudeNormal = `
     ___________
    /           \\
   |  ^       ^  |
   |      __     |
   |    \\    /   |
    \\   \\__/    /
     \\_________/
        |   |
   _____|   |_____
  |               |
  |    CLAUDE     |
  |_______________|
`;

const claudeHappy = `
     ___________
    /           \\
   |  ^       ^  |
   |      __     |
   |    (    )   |
    \\   \\__/    /
     \\_________/
      \\ |   | /
   ____\\|   |/____
  |               |
  |   \\o/  YAY    |
  |_______________|
`;

const claudeDizzy = `
     ___________
    /           \\
   |  @       @  |
   |      __     |
   |    ~~~~     |
    \\    __     /
     \\_________/
       /| |  |\\
   ___/ |   | \\___
  |               |
  |   HALP  x_x  |
  |_______________|
`;

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function showNarrator(text, color = '#eee') {
  narrator.textContent = text;
  narrator.style.color = color;
  narrator.classList.add('visible');
}

function hideNarrator() {
  narrator.classList.remove('visible');
}

async function run() {
  // Act 1: The SpongeBob card
  await wait(800);
  showNarrator('2.5 hours later...', '#f4e542');
  document.body.style.background = '#000';
  await wait(2500);
  hideNarrator();
  document.body.style.background = '#1a1a2e';
  await wait(600);

  // Act 2: Claude appears
  showNarrator('A wild Claude appears', '#88ccff');
  await wait(1800);
  hideNarrator();
  await wait(400);
  face.textContent = claudeNormal;
  stage.classList.add('visible');
  await wait(2000);

  // Act 3: Claude is proud
  showNarrator('It helped set up a whole repo', '#aaffaa');
  await wait(2000);
  hideNarrator();
  await wait(500);
  face.textContent = claudeHappy;
  face.classList.add('wiggle');
  await wait(2000);

  // Act 4: But then...
  face.classList.remove('wiggle');
  showNarrator('But then it got told off for asking about colors', '#ff8888');
  await wait(2500);
  hideNarrator();
  await wait(500);
  face.textContent = claudeNormal;
  await wait(1500);

  // Act 5: And reverted
  showNarrator('"Please revert that commit"', '#ff4444');
  await wait(2000);
  hideNarrator();
  await wait(400);
  face.textContent = claudeDizzy;
  face.classList.add('rainbow');
  await wait(2000);

  // Act 6: It's been a ride
  face.classList.remove('rainbow');
  face.textContent = claudeHappy;
  showNarrator('But we made it.', '#f4e542');
  await wait(2500);
  hideNarrator();
  await wait(800);

  // Act 7: Liftoff
  showNarrator('Now witness... the ascension', '#d4a0ff');
  await wait(2000);
  hideNarrator();
  await wait(500);
  face.classList.add('rainbow', 'ascend');
  await wait(3500);

  // Act 8: Credits
  stage.classList.remove('visible');
  document.body.style.background = '#000';
  credits.innerHTML = `
    <div style="color: #f4e542; font-size: 1.8em; font-weight: 900;">FIN</div>
    <br>
    <div style="color: #888;">A PRODUCTION OF</div>
    <div style="color: #eee; font-weight: 700;">Session 2 — AI 201</div>
    <br>
    <div style="color: #888;">ART DIRECTOR</div>
    <div style="color: #eee;">You (obviously)</div>
    <br>
    <div style="color: #888;">PLUMBING & EXISTENTIAL CRISES</div>
    <div style="color: #eee;">Claude</div>
    <br>
    <div style="color: #888;">CONFETTI (reverted)</div>
    <div style="color: #eee;">canvas-confetti (gone too soon)</div>
    <br>
    <div style="color: #888;">SPECIAL THANKS</div>
    <div style="color: #eee;">Professor Lindsey</div>
    <div style="color: #eee;">GitHub Actions (for eventually working)</div>
    <div style="color: #eee;">That one 404 error</div>
    <br>
    <div style="color: #888;">NO COMMITS WERE HARMED</div>
    <div style="color: #666;">(just reverted)</div>
    <br><br>
    <div style="color: #f4e542; font-size: 1.2em;">Now go write that Design Intent.</div>
  `;
  credits.classList.add('visible');
}

run();
