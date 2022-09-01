// menu responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnManuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

//click para abrir

btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
});

//click para cerrar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

//Cerrar menu con elemntos de enlaces
enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.5s";
  menuResponsive.classList.remove("active");
});

//Slider productos
var contenedor = document.querySelector(".slider"),
  btnIzquierdo = document.getElementById("btn-izquierda"),
  btnDerecho = document.getElementById("btn-derecho");

// Evento derecho
btnDerecho.addEventListener("click", function () {
 contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click", function () {
 contenedor.scrollLeft -= contenedor.offsetWidth;
});


