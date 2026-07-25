document.addEventListener("DOMContentLoaded", () => {
  const botonEntrar = document.getElementById("botonEntrar");
  const escenaInicio = document.getElementById("escenaInicio");
  const pantallaTransicion = document.getElementById("pantallaTransicion");
  const escenaDorian = document.getElementById("escenaDorian");

  if (
    !botonEntrar ||
    !escenaInicio ||
    !pantallaTransicion ||
    !escenaDorian
  ) {
    console.error("Falta algún elemento necesario en el HTML.");
    return;
  }

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
});
const botonComenzar = document.getElementById("botonComenzar");
const escenaDashboard = document.getElementById("escenaDashboard");

botonComenzar.addEventListener("click", () => {

    escenaDorian.classList.remove("activa");

    escenaDashboard.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
