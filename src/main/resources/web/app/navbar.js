document.addEventListener('DOMContentLoaded', function () {
  var navHeader = document.querySelector('header.sticky');
  var hamburger = document.querySelector('.navbar-hamburger');

  if (!navHeader || !hamburger) return;

  hamburger.addEventListener('click', function () {
    var isOpen = navHeader.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!navHeader.contains(e.target) && navHeader.classList.contains('nav-open')) {
      navHeader.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navHeader.classList.contains('nav-open')) {
      navHeader.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
});
