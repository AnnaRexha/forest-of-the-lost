// Stars animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    d: Math.random() * 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animateStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].y += stars[i].d;
    if (stars[i].y > canvas.height) {
      stars[i].y = 0;
      stars[i].x = Math.random() * canvas.width;
    }
  }
  drawStars();
  requestAnimationFrame(animateStars);
}

animateStars();

// Modal logic
function openModal(title) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-body").innerHTML = `<p>This is where your magical content goes for <strong>${title}</strong>! Add photos, videos, or a song here!</p>`;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
