const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 40);
});

let menu = document.querySelector("#icono-menu");
let navLista = document.querySelector(".nav-lista");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navLista.classList.toggle("abierto");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navLista.classList.remove("abierto");
};

const sr = ScrollReveal({
  origin: "top",
  distance: "35px",
  duration: 2000,
  reset: true,
});

sr.reveal(".texto-inicio", { delay: 20 });
sr.reveal(".imagen-inicio", { delay: 80 });
sr.reveal(".contenedor", { delay: 20 });

sr.reveal(".sobre-nosotros-imagen", {});
sr.reveal(".sobre-nosotros-texto", { delay: 20 });

sr.reveal(".texto-medio", {});
sr.reveal(".fila-btn, .contenido-hamburguesas", { delay: 20 });
sr.reveal(".contacto", { delay: 20 });
