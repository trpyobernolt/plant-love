const stages = ['images/plant1.png', 'images/plant2.png', 'images/plant3.png', 'images/plant4.png'];
const messages = [
  "Love is like a garden, it needs soil to grow and care to flourish 🌱",
  "Each day you water it, it grows stronger 🌿",
  "Like our love, it needs nurturing to thrive 🌼",
  "Will you build a garden and grow with me?",
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
