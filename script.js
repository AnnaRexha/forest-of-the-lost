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
    },
  },
  retina_detect: true
});

// Bubble (star) creation
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const container = document.getElementById('bubble-container');

// Dynamically generate the bubbles (stars)
months.forEach((month, index) => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerText = month;

  // Position the bubbles randomly within the container
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  // Add event listener to open modal when clicked
  bubble.addEventListener('click', () => openModal(month));

  container.appendChild(bubble);
});

// Modal functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(monthName) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = `Loading content for ${monthName}...`;

  fetch(`content/${monthName}.html`)
    .then(res => res.text())
    .then(data => modalBody.innerHTML = data)
    .catch(() => modalBody.innerHTML = "No content available.");
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
