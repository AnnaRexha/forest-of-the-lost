// Sparkles and Comets
window.onload = function () {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    d: Math.random() * 100
  }));

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let s of stars) {
      ctx.moveTo(s.x, s.y);
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updateStars();
  }

  let angle = 0;
  function updateStars() {
    angle += 0.01;
    for (let i = 0; i < stars.length; i++) {
      stars[i].y += Math.cos(angle + stars[i].d) + 1;
      stars[i].x += Math.sin(angle) * 0.5;
      if (stars[i].x > canvas.width || stars[i].y > canvas.height) {
        stars[i].x = Math.random() * canvas.width;
        stars[i].y = 0;
      }
    }
  }

  setInterval(drawStars, 33);
};

// Modal Logic
function openModal(title, content) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").textContent = content;
  document.getElementById("modal").style.display = "block";
}

document.getElementById("closeModal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

