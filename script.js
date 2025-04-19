const starContainer = document.getElementById('star-container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  starContainer.appendChild(star);
}

for (let i = 0; i < 200; i++) {
  createStar();
}
