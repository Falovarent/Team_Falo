function goTo(pageId, delay = 1500) {
  const intro = document.getElementById('intro');

  intro.style.display = 'flex';

  setTimeout(() => {
    intro.style.display = 'none';
    showPage(pageId);
  }, delay);
}

function goBack(pageId) {
  showPage(pageId);
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

window.onload = () => {
  const intro = document.getElementById('intro');
  intro.style.display = 'flex';

  setTimeout(() => {
    intro.style.display = 'none';
  }, 1500); // keep normal intro on load
};
