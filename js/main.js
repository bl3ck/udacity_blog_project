let mainNav = document.getElementById('main-menu');
let navBarToggle = document.getElementById('gv-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});