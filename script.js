// 1. Star Bubble Generator

const starNames = [
  'Sirius', 'Betelgeuse', 'Rigel', 'Vega', 'Polaris',
  'Altair', 'Deneb', 'Antares', 'Procyon', 'Aldebaran',
  'Capella', 'Spica', 'Arcturus', 'Canopus', 'Bellatrix'
];

const container = document.getElementById('bubble-container');

// Create star bubbles
starNames.forEach((star, i) => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerHTML = `<div class="star-name">${star}</div>`;

  // Position randomly across screen
  bubble.style.top = `${Math.random() * 80 + 5}%`;
  bubble.style.left = `${Math.random() * 80 + 5}%`;

  // Highlight central star
  if (i === Math.floor(starNames.length / 2)) {
    bubble.classList.add('current-star');
  }

  bubble.addEventListener('click', () => openModal(star.toLowerCase()));
  container.appendChild(bubble);
});

// 2. Modal Functions

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(starName) {
  modal.style.display = 'flex';
  modalBody.innerHTML = "Loading content...";

  fetch(`content/${starName}.html`)
    .then(res => res.text())
    .then(data => modalBody.innerHTML = data)
    .catch(() => modalBody.innerHTML = "Nothing here yet... come back soon.");
}

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

function showAbout() {
  modal.style.display = 'flex';
  modalBody.innerHTML = `
    <h2>About</h2>
    <p><strong>Forest of the Lost</strong> is a galaxy of creativity. Click on a star to explore songs, stories, and memories hidden among the stars.</p>
  `;
}

// 3. Galaxy Particle Background

// Initialize particles.js for galaxy effect
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 1.5,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 0.3,
      "direction": "none",
      "random": true,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 50
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Create clickable stars (bubbles)
const bubbleContainer = document.getElementById('bubble-container');

// Example stars (you can adjust this dynamically based on your needs)
const stars = [
  { id: "Sirius", x: 50, y: 50, content: "Sirius is the brightest star in our night sky." },
  { id: "Alpha Centauri", x: 100, y: 150, content: "Alpha Centauri is a triple star system." },
  { id: "Betelgeuse", x: 300, y: 300, content: "Betelgeuse is a red supergiant star." },
  // Add more stars as needed
];

// Dynamically create star bubbles
stars.forEach(star => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${star.x}%`;
  bubble.style.top = `${star.y}%`;
  bubble.innerHTML = star.id;
  bubble.setAttribute('data-id', star.id);
  bubble.setAttribute('data-content', star.content);

  bubble.addEventListener('click', () => openModal(star.id));

  bubbleContainer.appendChild(bubble);
});

// Modal functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(starId) {
  // Find the clicked star
  const star = stars.find(s => s.id === starId);
  modal.classList.remove('hidden');
  modalBody.innerHTML = `<h2>${star.id}</h2><p>${star.content}</p>`;
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
