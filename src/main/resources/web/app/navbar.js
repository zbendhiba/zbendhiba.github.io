document.addEventListener('DOMContentLoaded', function () {
  var navHeader = document.querySelector('aside.sidebar.main > header');
  var hamburger = document.querySelector('.navbar-hamburger');

  if (!navHeader || !hamburger) return;

  hamburger.addEventListener('click', function () {
    var isOpen = navHeader.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!navHeader.contains(e.target) && navHeader.classList.contains('open')) {
      navHeader.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navHeader.classList.contains('open')) {
      navHeader.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
});
