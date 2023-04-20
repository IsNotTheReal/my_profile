const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#list_elements_nav');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
