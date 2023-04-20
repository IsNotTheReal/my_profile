var box_menu = document.getElementById('list_elements_nav_zoom');
var box_menu_items = document.getElementById('list_elements_nav_menu');
var box = document.getElementById('btn_menu');
var btn = document.getElementsByClassName('btn_nav_top');

window.addEventListener('click', function(event) {
    if (event.target != box_menu && event.target != box && event.target != box_menu_items && event.target != btn[3] && event.target != btn[4] && event.target != btn[5]) {
        box_menu.style.display = 'none';
    }
});