// menu responsive
let btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnManuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

// FECHT
function personal() {
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      let html = "";
      json.forEach((persona) => {
        html += `
        <div class="persona">
            <img src=${persona.image} alt="personal equipo" class="persona-imagen">
            <div class="persona-info">
                 <h2>${persona.nombre}</h2>
                 <p>${persona.cargo}</p>
                <div class="social-media">
                    <a href=""><span class="fab fa-facebook"></span></a>
                    <a href=""><span class="fab fa-instagram"></span></a>
                    <a href=""><span class="fab fa-twitter"></span></a>
                    <a href=""><span class="fab fa-linkedin-in"></span></a>
                </div>
            </div>
        </div>
       
      `;
      });
      document.getElementById("equipo").innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}

personal();

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
let contenedor = document.querySelector(".slider"),
  btnIzquierdo = document.getElementById("btn-izquierda"),
  btnDerecho = document.getElementById("btn-derecho");

// Evento derecho
btnDerecho.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});

//VALIDACION FORMULARIO

let formulario = document.getElementById("formulario");

function validar(e) {
  let inputNombre = document.getElementById("nombre"),
    inputEmail = document.getElementById("email"),
    inputComents = document.getElementById("comentarios"),
    alertSuccess = document.getElementById("alertSuccess"),
    alertError = document.getElementById("alertError");

  // LocalStorage

  let nombre = inputNombre.value;
  let email = inputEmail.value;
  let coment = inputComents.value;

  localStorage.setItem("Nombre", nombre);
  localStorage.setItem("Email", email);
  localStorage.setItem("Comentarios", coment);

  if (
    inputNombre.value == 0 ||
    inputEmail.value == 0 ||
    inputComents.value == 0
  ) {
    e.preventDefault();
    alertError.classList.remove("hide");
    alertError.classList.add("show");

    setTimeout(() => {
      alertError.classList.remove("show");
      alertError.classList.add("hide");
    }, 2000);
  } else {
    e.preventDefault();
    alertSuccess.classList.remove("hide");
    alertSuccess.classList.add("show");

    setTimeout(() => {
      alertSuccess.classList.remove("show");
      alertSuccess.classList.add("hide");
    }, 2000);
    inputNombre.value = "";
    inputEmail.value = "";
    inputComents.value = "";
  }
}

// Eventos del formulario
formulario.addEventListener("submit", validar),
  (fullSize = document.documentElement.offsetHeight),
  (sizeVP = document.documentElement.clientHeight);

// BOTON HACIA ARRIBA

let btnTop = document.getElementById("btn-top"),
  logo = document.getElementById("logo");

// detectamos scroll en la pagina web
window.addEventListener("scroll", function () {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }

  // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
  if (fullSize == scroll + sizeVP) {
    btnTop.classList.add("scrollFinal");
  } else {
    btnTop.classList.remove("scrollFinal");
  }
});

// DETECTAMOS EVENTO CLICK EN EL BOTON

btnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// DETECTAR EVENTO CLICK EN LOGO

logo.addEventListener("click", function () {
  window.scroll(0, 0);
});

// uso Libreria Leaflets
let map = L.map("map").setView([-33.051495, -71.605126], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

let circle = L.circle([-33.051495, -71.605126], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

// se utiliza var ya que la libreria no permite let entrega error en la variable
var popup = L.popup()
  .setLatLng([-33.051495, -71.605126])
  .setContent("World Pizza.")
  .openOn(map);

  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on("click", onMapClick);
