const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentMonth = new Date().getMonth();
const container = document.getElementById('bubble-container');

// Generate bubbles with different shapes and colors for each month
const monthStyles = {
  january:   { bg: '#a0c4ff', shape: 'blob1' },
  february:  { bg: '#ffc6ff', shape: 'blob2' },
  march:     { bg: '#b9fbc0', shape: 'blob3' },
  april:     { bg: '#caffbf', shape: 'blob4' },
  may:       { bg: '#fdffb6', shape: 'blob5' },
  june:      { bg: '#ffd6a5', shape: 'blob6' },
  july:      { bg: '#ffadad', shape: 'blob7' },
  august:    { bg: '#ffcad4', shape: 'blob8' },
  september: { bg: '#d0f4de', shape: 'blob9' },
  october:   { bg: '#bdb2ff', shape: 'blob10' },
  november:  { bg: '#a2d2ff', shape: 'blob11' },
  december:  { bg: '#cdb4db', shape: 'blob12' }
};

// Create bubbles and assign random positions based on the current month
months.forEach((month, index) => {
  const lowerMonth = month.toLowerCase();
  const style = monthStyles[lowerMonth];

  const bubble = document.createElement('div');
  bubble.classList.add('bubble', style.shape);
  bubble.style.backgroundColor = style.bg;
  bubble.textContent = month;

  if (index === currentMonth) {
    bubble.classList.add('current-month');
  } else {
    const randX = Math.random() * 80 + 5;
    const randY = Math.random() * 70 + 10;
    bubble.style.left = `${randX}%`;
    bubble.style.top = `${randY}%`;
  }

  bubble.addEventListener('click', () => openModal(lowerMonth));
  container.appendChild(bubble);
});

// Modal functions
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(monthName) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = "Loading content...";

  fetch(`content/${monthName}.html`)
    .then(res => res.text())
    .then(data => modalBody.innerHTML = data)
    .catch(() => modalBody.innerHTML = "Nothing here yet... come back soon.");
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function showAbout() {
  modal.classList.remove('hidden');
  modalBody.innerHTML = `
    <h2>About</h2>
    <p>This is <strong>Forest of the Lost</strong> — a mysterious journey through months, moments, and memories. Click any bubble to explore.</p>
  `;
}

document.getElementById('modal').classList.add('hidden');
