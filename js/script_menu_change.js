var box_menu = document.getElementById('list_elements_nav_zoom');
var box_menu_items = document.getElementById('list_elements_nav_menu');
var box = document.getElementById('btn_menu');
var btn = document.getElementsByClassName('btn_nav_top');
var list = document.getElementsByClassName('list');

window.addEventListener('click', function(event) {
    if (event.target != box_menu && event.target != box && event.target != box_menu_items && event.target != btn[3] && event.target != btn[4] && event.target != btn[5] && event.target != list[0] && event.target != list[1] && event.target != list[2]) {
        box_menu.style.display = 'none';
    }
});