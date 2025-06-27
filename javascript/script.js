const contenedor = document.getElementById("contenedor");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const contenedorIntegrante = document.querySelector('.contenedor-integrante');
const integranteWidth = contenedorIntegrante.offsetWidth + 60; // ancho real + margen
const integrantesPorVista = 3;
const scrollAmount = integranteWidth * integrantesPorVista;

btnNext.addEventListener("click", () => {
  contenedor.scrollLeft += scrollAmount;
});

btnPrev.addEventListener("click", () => {
  contenedor.scrollLeft -= scrollAmount;
});

const contenedorEpoca = document.getElementById("contenedordos");
const btnPrevEpoca = document.getElementById("prevdos");
const btnNextEpoca = document.getElementById("nextdos");

const tarjetasEpoca = document.querySelectorAll('[class^="tarjeta-epocas"]');
const tarjetaEpocaWidth = tarjetasEpoca[0].offsetWidth + 20; // 20px es el gap
const epocasPorVista = 4;
const scrollAmountEpoca = tarjetaEpocaWidth * epocasPorVista;

btnNextEpoca.addEventListener("click", () => {
  contenedorEpoca.scrollLeft += scrollAmountEpoca;
});

btnPrevEpoca.addEventListener("click", () => {
  contenedorEpoca.scrollLeft -= scrollAmountEpoca;
});
const linkNavbar = document.querySelector('.text-contenedorimg-uno');
if (linkNavbar) {
    linkNavbar.addEventListener('click', function(e) {
        const navbar = document.getElementById('navbar');
        
        navbar.classList.remove('nav-animate');
        navbar.offsetHeight;
        navbar.classList.add('nav-animate');
        
        setTimeout(() => {
            navbar.classList.remove('nav-animate');
        }, 500);
    });
}
const linkSecInt = document.querySelector('.text-contenedorimg-dos');
if (linkSecInt) {
    linkSecInt.addEventListener('click', function(e) {

      setTimeout(() => {
        const SecInt = document.getElementById('secInt');
        
        SecInt.classList.remove('Int-animate');
        SecInt.offsetHeight;
        SecInt.classList.add('Int-animate');
        
        setTimeout(() => {
            navbar.classList.remove('Int-animate');
        }, 700);
      }, 700);
    });
}
const linkSecFilo = document.querySelector('.text-contenedorimg-tres');
if (linkSecFilo) {
    linkSecFilo.addEventListener('click', function(e) {

      setTimeout(() => {
        const SecFilo = document.getElementById('seccFilo');
        
        SecFilo.classList.remove('Filo-animate');
        SecFilo.offsetHeight;
        SecFilo.classList.add('Filo-animate');
        
        setTimeout(() => {
            navbar.classList.remove('Filo-animate');
        }, 700);
      }, 700);
    });
}
