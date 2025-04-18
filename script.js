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

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160,
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
      "speed": 0.2,
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
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
