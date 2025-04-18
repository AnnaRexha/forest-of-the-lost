const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentMonth = new Date().getMonth();
const container = document.getElementById('bubble-container');

// Generate bubbles
months.forEach((month, index) => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = month;

  // Position bubbles randomly (except current month)
  if (index === currentMonth) {
    bubble.classList.add('current-month');
  } else {
    const randX = Math.random() * 80 + 5; // 5% to 85%
    const randY = Math.random() * 70 + 10;
    bubble.style.left = `${randX}%`;
    bubble.style.top = `${randY}%`;
  }

  bubble.addEventListener('click', () => openModal(month.toLowerCase()));
  container.appendChild(bubble);
});

// Modal functionality
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
  modalBody.innerHTML = "<h2>About</h2><p>This is Forest of the Lost — a creative space unfolding through the months...</p>";
}
