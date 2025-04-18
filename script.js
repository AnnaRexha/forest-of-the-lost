function addRotationEvents(audioId, imgId) {
  const audio = document.getElementById(audioId);
  const img = document.getElementById(imgId);

  audio.addEventListener('play', () => {
    img.classList.add('rotate');
  });

  audio.addEventListener('pause', () => {
    img.classList.remove('rotate');
  });

  audio.addEventListener('ended', () => {
    img.classList.remove('rotate');
  });
}

addRotationEvents('track1', 'track1-img');
addRotationEvents('track2', 'track2-img');
