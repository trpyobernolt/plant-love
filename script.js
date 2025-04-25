const stages = ['images/plant1.png', 'images/plant1.png', 'images/plant2.png', 'images/plant3.png', 'images/plant4.png', "present.png"];
const messages = [
    "Happy Birthday my love! 🎉💖",
  "Love is like a garden, and on your birthday we plant something new 🌱",
  "Each day I have watched you grow and change, and I love you more for it 🌿",
  "With each passing day, your spirit grows bigger and brighter, and more colorful 🌼",
  "I have the privilege of watching you bloom, and I am so grateful for it 🌸",
  "Will you build a garden with me?",
];

function getStage() {
  return parseInt(localStorage.getItem('stage')) || 0;
}

function waterPlant() {
  let stage = getStage();
  if (stage < stages.length - 1) {
    stage++;
    localStorage.setItem('stage', stage);
  }
  updateUI();
}

function updateUI() {
  const stage = getStage();
  document.getElementById('plant').src = stages[stage];
  document.getElementById('message').textContent = messages[stage];
}

if (stage === stages.length - 1) {
    resetButton.style.display = "inline-block";
    
    // 🎉 Confetti blast
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    resetButton.style.display = "none";
  }

  
function resetPlant() {
  localStorage.setItem('stage', 0);
  updateUI();
}



// Load correct stage on visit
window.onload = updateUI;
