const register = document.querySelector(".register"),
  email = document.querySelector("#email"),
  nombre = document.querySelector("#nombre"),
  userReg = document.querySelector("#userReg"),
  passReg = document.querySelector("#passReg"),
  btnRegistrar = document.querySelector("#registrar");

let usuarios;

if (localStorage.getItem("usuarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [];
}

// Constructor de usuarios
class Usuario {
  constructor(nombre, usuario, email, password) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.email = email;
    this.password = password;
  }
}

function limpiarCampos() {
  nombre.value = "";
  userReg.value = "";
  passReg.value = "";
  email.value = "";
}

function guardarUsuario(usuario) {
  return usuarios.push(usuario);
}

function guardarEnStorage(elemento) {
  let ls = localStorage.setItem("usuarios", JSON.stringify(elemento));
  return ls;
}

btnRegistrar.addEventListener("click", (e) => {
  e.preventDefault();

  const newUser = new Usuario(
    nombre.value,
    userReg.value,
    email.value,
    passReg.value
  );
  guardarUsuario(newUser);
  limpiarCampos();
  guardarEnStorage(usuarios);
});
