window.addEventListener('load', function() {
    var btnMostrar = document.getElementById("btn_menu");
    var contenedorLista = document.getElementById("list_elements_nav_zoom");
    
    btnMostrar.addEventListener("click", function() {
        if (contenedorLista.style.display === "none") {
            contenedorLista.style.display = "block";
          } else {
            contenedorLista.style.display = "none";
          }
    });
});