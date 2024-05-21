const body = document.body;

function toggleDarkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
}

function toggleLightMode() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
}

const darkModeIcon = document.querySelector('.icone1.dark-mode');
const lightModeIcon = document.querySelector('.icone1.light-mode');

darkModeIcon.addEventListener('click', toggleDarkMode);
lightModeIcon.addEventListener('click', toggleLightMode);