//Logica para el login y registro de usuarios. Creamos un array de usuarios y lo subimos al localStorage
//APLICAR SINTAXIS AVANZADA DE ESTA FUNCION PARA LA ENTREGA

//Selectores 


const userReg = document.getElementById('usuario')
const passReg = document.getElementById('password')
const formIngreso = document.getElementById('formIngreso')






//Funcion para encontrar el usuario que previamente se registro y ya esta en LocalStorage
//aplicarle al if sintaxis avanzada para entrega final (con operador ternario)

function inicioSesion (usuarios){
  let userFound = usuarios.find((usuario)=>{
    return usuario.nombre == usuario.value && usuario.password == password.value;
  });
if(userFound){
  location.href="./productos.html"
}else{
  Swal.fire({
    icon: "warning",
    title: "error",
    text: "Usuario no encontrado",
    footer: '<a href="./register.html">Puede crear un usuario aqui</a>'
  });;
}
}

//Funcion para recuperar el usuario de Local Storage

function recuperarLS (){
  return JSON.parse(localStorage.getItem("usuarios"))
}

//guardamos la funcion en una variable

const usuariosLs = recuperarLS()

//Agregamos el listener para el form del login

formIngreso.addEventListener("submit", (e) =>{
  e.preventDefault()
  inicioSesion(usuariosLs)
})


/*
<button type="submit" class="btn btn-dark" id="botonIngreso>Ingresar</button>
<button type="submit" class="btn btn-secondary"><a href="register.html">¿No esta registrado? Click aqui</a></button>
*/


