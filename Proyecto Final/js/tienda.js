//selectores

const containerBebidas = document.querySelector("#containerBebidas")
const btnBuscar = document.querySelector("#btnBuscar")
const inputIngreso = document.querySelector("#inputIngreso")
const containerCarrito = document.querySelector("#containerCarrito")
const btnCarrito1 = document.querySelector("#btnCarrito1")
const btnCarrito2 = document.querySelector("#btnCarrito2")
const btnCarrito3 = document.querySelector("#btnCarrito3")
const btnCarrito4 = document.querySelector("#btnCarrito4")
const btnCarrito5 = document.querySelector("#btnCarrito5")
const btnCarrito6 = document.querySelector("#btnCarrito6")
const btnClear = document.querySelector("#btnClear")


//Array con los servicios (bebidas)

const bebidas = [
    {id: 1, nombre: 'Cerveza patagonia', precio: 5000, img: "./img/logoPatagonia.jpg"},
    {id: 2, nombre: 'Cerveza quilmes', precio: 4000, img: "./img/logoQuilmes.png"},
    {id: 3, nombre: 'cerveza andes', precio: 4500, img: "./img/logoAndes.png"},
    {id: 4, nombre: 'vino catena', precio: 10000, img: "./img/logoCatena.jpg"},
    {id: 5, nombre: 'vino rutini', precio: 7000, img: "./img/logoRutini.jpg"},
    {id: 6, nombre: 'vino cobos', precio: 15000, img: "./img/logoCobos.png"}
  ]

//Array del carrito

carrito = []

//Array items filtrados

itemsFiltrados = []

//funcion para filtrar los elementos seleccionados por el usuario

function crearHtml (arr){
    containerBebidas.innerHTML =''
    let html;
    for (const el of arr) {
        html = `<div class ="card" style="width: 18rem;">
                    <img src=" ${el.img}" class="card-img-top" alt="${el.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${el.nombre}</h5>
                        <p class="card-text">Precio: $${el.precio} </p>
                        <button class="btn btn-primary" id="btnCarrito">Agregar al carrito</button>
                    </div>
                </div>`
        
        containerBebidas.innerHTML += html;
    }              

}

//Funcion para mostrar el carrito debajo

function crearHtml2 (arr){
    containerCarrito.innerHTML =''
    let html;
    for (const el of arr) {
        html = `<div class="container-fluid">
        <h5>${el.nombre}</h5>
        <h5>$${el.precio}</h5>
        </div> `
        
        containerCarrito.innerHTML += html;
    }              

}



//Funcion con .find para buscar en el array de bebidas

function buscarArray (arr, filtro){
    const encontrado = arr.find((el)=>{
        return el.nombre.includes(filtro)
    })
    return encontrado;
}

//Listener para el boton de filtrado

btnBuscar.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, inputIngreso.value)
    itemsFiltrados.push(encontrado)
    console.log(itemsFiltrados);
    crearHtml(itemsFiltrados)
})



/*
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);

*/

//Listeners para los botones de las tarjetas y el de limpiar carrito. Cada uno tiene su listener pero todos hacen lo mismo (pushean elementos al carrito)

btnCarrito1.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, 'andes')
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);
    crearHtml2(carrito)

    Toastify({
        text: "Elemento añadido al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(121,39,9,1) 100%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})



btnCarrito2.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, 'quilmes')
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);
    crearHtml2(carrito)

    Toastify({
        text: "Elemento añadido al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(121,39,9,1) 100%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

btnCarrito3.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, 'patagonia')
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);
    crearHtml2(carrito)

    Toastify({
        text: "Elemento añadido al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(121,39,9,1) 100%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

btnCarrito4.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, 'catena')
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);
    crearHtml2(carrito)

    Toastify({
        text: "Elemento añadido al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(121,39,9,1) 100%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

btnCarrito5.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, 'cobos')
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);
    crearHtml2(carrito)

    Toastify({
        text: "Elemento añadido al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(121,39,9,1) 100%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

btnCarrito6.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, 'rutini')
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(carritoLS);
    crearHtml2(carrito)

    Toastify({
        text: "Elemento añadido al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(121,39,9,1) 100%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})


//Este boton va a modificar tanto el contenedor como el localsotrage del carrito
btnClear.addEventListener ('click', ()=>{
  localStorage.removeItem('carrito')
  containerCarrito.innerHTML=""
})



  