const btnIngresar = document.querySelector("#ingresar"),
  user = document.querySelector("#user"),
  pass = document.querySelector("#pass"),
  check = document.querySelector("#recordar");

// FUNCIONES

function inicioSesion(usuarios) {
  // Codigo inicio sesion
  let userFound = usuarios.find((usuario) => {
    return usuario.nombre == user.value && usuario.pass == pass.value;
  });
  if (userFound) {
    window.location.href = "./index.html";
  } else {
    document.querySelector("#mensaje").innerText = "Usuario no encontrado";
  }

  return userFound;
}

function recuperarLS() {
  let datos = JSON.parse(localStorage.getItem("usuarios"));
  return datos;
}

// Ejecucion de function
const usuarioLS = recuperarLS();

// Listeners
btnIngresar.addEventListener("click", (e) => {
  // codigo a ejecutar
  e.preventDefault();
  inicioSesion(usuarioLS);
});
