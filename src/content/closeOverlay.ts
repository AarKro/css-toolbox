export const closeOverlay = () => {
  const overlay = document.getElementById('css-toolbox-overlay');
  const content = document.getElementById('css-toolbox-content');
  if (overlay) {
    overlay.classList.remove('overlay-open');
  }
  if (content) {
    content.classList.remove('content-shown');
  }
};
