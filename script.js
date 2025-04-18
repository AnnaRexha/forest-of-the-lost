// Particles.js initialization
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  },
  retina_detect: true
});

// Dynamic Star (Bubble) Creation
const starData = [
  { name: "Star 1", content: "This is content for Star 1." },
  { name: "Star 2", content: "This is content for Star 2." },
  { name: "Star 3", content: "This is content for Star 3." },
  { name: "Star 4", content: "This is content for Star 4." },
  { name: "Star 5", content: "This is content for Star 5." },
  // Add as many stars as you want
];

const container = document.getElementById('bubble-container');

// Create and position the stars
starData.forEach((star, index) => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerText = star.name;

  // Position the stars randomly within the container
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  // Add click event to open modal with content
  bubble.addEventListener('click', () => openModal(star));

  container.appendChild(bubble);
});

// Modal Functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(star) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = star.content;
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
