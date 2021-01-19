window.onload = () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementsByTagName('nav')[0];
  hamburger.onclick = () => {
    nav.classList.toggle('active');
  };

  const media = window.matchMedia('(min-width: 768px)');
  media.addEventListener('change', () => {
    if (media.matches) {
      nav.classList = '';
    }
  });
};
