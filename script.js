// Particles.js initialization (Moving galaxy effect)
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of particles (stars)
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle", // Shape of particles
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

// Star data (each star has a name and content)
const starsData = [
  { name: "Star 1", content: "This is content for Star 1." },
  { name: "Star 2", content: "This is content for Star 2." },
  { name: "Star 3", content: "This is content for Star 3." },
  { name: "Star 4", content: "This is content for Star 4." },
  { name: "Star 5", content: "This is content for Star 5." },
  // Add more stars as needed
];

const starContainer = document.getElementById('star-container');

// Create and position the stars
starsData.forEach((star, index) => {
  const starElement = document.createElement('div');
  starElement.classList.add('star');
  starElement.innerText = star.name;

  // Randomly position the stars in the container
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  starElement.style.left = `${x}px`;
  starElement.style.top = `${y}px`;

  // Add click event to open the modal with content
  starElement.addEventListener('click', () => openModal(star));

  starContainer.appendChild(starElement);
});

// Modal functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(star) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = star.content; // Display the content for the clicked star
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
