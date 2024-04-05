//Logica para el login y registro de usuarios. Creamos un array de usuarios y lo subimos al localStorage
//APLICAR SINTAXIS AVANZADA DE ESTA FUNCION PARA LA ENTREGA

//Selectores 

const botonLogin = document.querySelector('#botonLogin')
const userReg = document.getElementById('usuario')
const passReg = document.getElementById('password')
const formularioRegistro = document.getElementById ('formularioRegistro')

// if para verificar si hay o no usuarios en LS, si no los hay crea un array

let usuarios;

if(localStorage.getItem('usuarios')){
  usuarios=JSON.parse(localStorage.getItem('usuarios'))
}else{
  usuarios=[]
}

//Construimos el usuario con class

class Usuario {
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password
  }
}

//funcion para guardar usuer

function guardarUser (usuario){
    return usuarios.push(usuario)
  }
  


//Function para pushear el usuario al localStorage

function guardarLS (arr) {
  return localStorage.setItem('usuarios', JSON.stringify(arr))
}


//Eventos para guardar el usuario

formularioRegistro.addEventListener('submit', (e)=>{
  e.preventDefault()
  const newUser = new Usuario (userReg.value, passReg.value)
  guardarUser(newUser)
  guardarLS(usuarios)
})

console.log(usuarios);









