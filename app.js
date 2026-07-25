const botonEntrar = document.getElementById("botonEntrar");
const escenaInicio = document.getElementById("escenaInicio");
const pantallaTransicion = document.getElementById("pantallaTransicion");
const escenaDorian = document.getElementById("escenaDorian");

botonEntrar.addEventListener("click", () => {

  escenaInicio.style.display = "none";

  pantallaTransicion.style.display = "flex";

  setTimeout(() => {

    pantallaTransicion.style.display = "none";

    escenaDorian.style.display = "flex";

  }, 2500);

});
const botonEntrar = document.getElementById("botonEntrar");
const escenaInicio = document.getElementById("escenaInicio");
const pantallaTransicion = document.getElementById("pantallaTransicion");
const escenaDorian = document.getElementById("escenaDorian");

botonEntrar.addEventListener("click", () => {
  escenaInicio.style.display = "none";

  pantallaTransicion.style.display = "flex";
  pantallaTransicion.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    pantallaTransicion.style.display = "none";
    pantallaTransicion.setAttribute("aria-hidden", "true");

    escenaDorian.classList.add("activa");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 2500);
});
