var box_menu = document.getElementById('list_elements_nav_zoom');
var btn_menu = document.getElementById('btn_menu');

box_menu.addEventListener('click', function(event) {
  event.stopPropagation();
});

btn_menu.addEventListener('click', function(event) {
    event.stopPropagation();
  });

document.documentElement.addEventListener('click', function(event) {
    if (event.target !== box_menu && !box_menu.contains(event.target) && event.target !== btn_menu) {
        box_menu.style.display = 'none';
    }
  });