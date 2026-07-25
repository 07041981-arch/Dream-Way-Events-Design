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
