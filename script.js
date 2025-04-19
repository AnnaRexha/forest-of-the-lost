const planetContainer = document.getElementById("planet-container");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

// Sample planets with links to your content (you can change/add)
const planets = [
  { name: "Story Planet", img: "images/planet1.png", content: "content/story.html" },
  { name: "Music Planet", img: "images/planet2.png", content: "content/music.html" },
  { name: "Photo Planet", img: "images/planet3.png", content: "content/photos.html" },
  { name: "Vlog Planet", img: "images/planet4.png", content: "content/vlog.html" }
];

// Create planets dynamically
planets.forEach((planet, index) => {
  const planetEl = document.createElement("div");
  planetEl.className = "planet";
  planetEl.style.backgroundImage = `url(${planet.img})`;
  planetEl.style.top = `${Math.random() * 80 + 10}%`;
  planetEl.style.left = `${Math.random() * 90 + 5}%`;
  planetEl.style.animationDuration = `${Math.random() * 5 + 4}s`;

  planetEl.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalBody.innerHTML = "Loading...";
    fetch(planet.content)
      .then(res => res.text())
      .then(data => modalBody.innerHTML = data)
      .catch(() => modalBody.innerHTML = "Content not found.");
  });

  planetContainer.appendChild(planetEl);
});

// Modal close
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
