export const openOverlay = () => {
  const overlay = document.getElementById('css-toolbox-overlay');
  const content = document.getElementById('css-toolbox-content');
  if (overlay) {
    overlay.classList.add('overlay-open');
  }
  if (content) {
    content.classList.add('content-shown');
  }
};