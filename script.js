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

// Star (clickable) creation
const starNames = [
  'Orion', 'Sirius', 'Polaris', 'Betelgeuse', 'Aldebaran', 'Rigel', 'Antares', 'Capella', 'Arcturus', 'Vega', 'Altair', 'Spica'
];

const container = document.getElementById('star-container'); // Correctly referencing 'star-container'

// Dynamically generate the stars
starNames.forEach((star, index) => {
  const starElement = document.createElement('div');
  starElement.classList.add('star'); // Assigning 'star' class for styling
  starElement.innerText = star; // Text content for the star

  // Position the stars randomly within the container
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  starElement.style.left = `${x}px`;
  starElement.style.top = `${y}px`;

  // Add event listener to open modal when clicked
  starElement.addEventListener('click', () => openModal(star));

  container.appendChild(starElement); // Append the star to the container
});

// Modal functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(starName) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = `Loading content for ${starName}...`;

  fetch(`content/${starName}.html`) // Assuming you have HTML files for each star under the 'content' directory
    .then(res => res.text())
    .then(data => modalBody.innerHTML = data)
    .catch(() => modalBody.innerHTML = "No content available.");
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
