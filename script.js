const starNames = [
  'Sirius', 'Betelgeuse', 'Alpha Centauri', 'Rigel', 'Vega', 'Polaris',
  'Arcturus', 'Capella', 'Antares', 'Aldebaran', 'Spica', 'Fomalhaut'
];

const currentStar = new Date().getMonth();
const container = document.getElementById('bubble-container');

// Generate star-shaped bubbles (stars)
starNames.forEach((star, index) => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.classList.add(`star${index}`);
  bubble.textContent = star;
  
  const randX = Math.random() * 90 + 5; // Random X position
  const randY = Math.random() * 80 + 10; // Random Y position
  
  bubble.style.left = `${randX}%`;
  bubble.style.top = `${randY}%`;
  
  // Mark current star
  if (index === currentStar) {
    bubble.classList.add('current-star');
  }
  
  bubble.addEventListener('click', () => openModal(star.toLowerCase()));
  container.appendChild(bubble);
});

// Modal functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(starName) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = "Loading content...";

  fetch(`content/${starName}.html`) // Create a content file for each star
    .then(res => res.text())
    .then(data => modalBody.innerHTML = data)
    .catch(() => modalBody.innerHTML = "Nothing here yet... come back soon.");
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function showAbout() {
  modal.classList.remove('hidden');
  modalBody.innerHTML = `
    <h2>About</h2>
    <p>This is the <strong>Galaxy of Stories</strong> — explore different stars and discover hidden content from my experiences.</p>
  `;
}

document.getElementById('modal').classList.add('hidden');
