const stages = ['images/plant1.png', 'images/plant2.png', 'images/plant3.png', 'images/plant4.png'];
const messages = [
  "Day 1: A little love 💚",
  "Day 2: You're helping me grow 🌿",
  "Day 3: Look at me bloom 🌸",
  "Fully grown! Just like my love for you ❤️"
];

let stage = parseInt(localStorage.getItem('stage')) || 0;

function waterPlant() {
  if (stage < stages.length - 1) {
    stage++;
    localStorage.setItem('stage', stage);
  }
  updateUI();
}

function updateUI() {
  document.getElementById('plant').src = stages[stage];
  document.getElementById('message').textContent = messages[stage];
}

function resetPlant() {
    stage = 0;
    localStorage.setItem('stage', stage);
    updateUI();
  }
  

// Load correct stage on visit
window.onload = updateUI;
