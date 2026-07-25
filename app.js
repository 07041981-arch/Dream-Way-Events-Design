document.addEventListener("DOMContentLoaded", () => {
  const botonEntrar = document.getElementById("botonEntrar");
  const botonComenzar = document.getElementById("botonComenzar");

  const escenaInicio = document.getElementById("escenaInicio");
  const pantallaTransicion = document.getElementById("pantallaTransicion");
  const escenaDorian = document.getElementById("escenaDorian");
  const escenaDashboard = document.getElementById("escenaDashboard");

  if (
    !botonEntrar ||
    !botonComenzar ||
    !escenaInicio ||
    !pantallaTransicion ||
    !escenaDorian ||
    !escenaDashboard
  ) {
    console.error("Falta algún elemento necesario en el HTML.");
    return;
  }

  /* PORTADA → DORIAN */
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
        behavior: "auto"
      });
    }, 2500);
  });

  /* DORIAN → DASHBOARD */
  botonComenzar.addEventListener("click", () => {
    escenaDorian.classList.remove("activa");
    escenaDorian.style.display = "none";

    escenaDashboard.hidden = false;
    escenaDashboard.classList.add("activa");
    escenaDashboard.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  });
});
