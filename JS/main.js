

const botonPonmeAPrueba = document.getElementById("boton"); 
const algorritmo = document.getElementById("algorritmo");
const contacto = document.getElementById("carrito");
const formulario = document.getElementById("formulario");
const style = document.createElement("style");
const metadatos = document.getElementById("metadatos");
const hero = document.getElementById("hero")
const contenedorUsuario = document.getElementById("navegador");
style.innerHTML = animacionesAlgorritmos; // animaciones en db.js
let contenedorCartas = document.getElementById("contenedorCartas");
const carrito = descargarLS("ArrayCarrito");
const offcanvas = document.getElementById("offcanvas-body");


const cursos = [{id:1, nombre: "Javascript", precio: 25000, duracion: 3, imagen:"javascript.jpeg"},
    {id:2, nombre: "React", precio: 12000, duracion: 2,  imagen:"react.jpeg"},
    {id:3, nombre: "Angular", precio: 25000, duracion: 3,  imagen:"angular.jpeg"},
    {id:4, nombre: "Python", precio: 13250, duracion: 2,   imagen:"python.jpeg"},
    {id:5, nombre: "C", precio: 30000, duracion: 4,   imagen:"c.jpeg"},
    {id:6, nombre: "Golang", precio: 35000, duracion: 4, imagen:"go.jpeg"}]; 
    


botonPonmeAPrueba.onclick = () => { // transicion a proyecto
   
    document.head.appendChild(style);
    carrito.innerHTML="Carrito"; 
    
    setTimeout(function() {
        cargarLS("productos",cursos);
        renderizarCartas();
        renderizarCarrito();
      }, 800);
  
}


function renderizarCartas(){
  const cartas = descargarLS("productos"); 
  
  let contenido = `<div class="container" id="cartaCursos"> 
  <div class="row text-center">`
  
  for (const elemento of cartas){
    contenido+=`<div class="col-md">
    <div class="card" style="width: 18rem;">
    <img src="./Images/${elemento.imagen}" class="card-img-top" alt="Javascript">
    <div class="card-body">
        <h5 class="card-title">${elemento.nombre}</h5>
        <p class="card-text">Precio: $${elemento.precio} <br> Duracion: ${elemento.duracion} Meses</p>
        <a  id="btn${elemento.id}" class="btn btn-primary" onclick="agregarCarrito(${elemento.id})">¡Agregar al Carrito!</a>
        </div>
      </div>
      </div>`
    }

  contenedor+=`</div></div></div>`


  contenedorCartas.innerHTML = contenido;
  
  hero.innerHTML = presentacion;

  if (carrito.length>0){
    contenedorUsuario.innerHTML = CarritoConBadge;
  } else {
    contenedorUsuario.innerHTML = CarritoSinBadge;
  }
  

}

function renderizarCarrito(){
  
  let contenido = `<h3> Total: $${resumenPrecios()}</h3> `;

  for (const elemento of carrito){
    contenido+=  `<div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
    <div class="mr-1"><img class="rounded" src="./Images/${elemento.imagen}" width="70"></div>
    <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">Curso: ${elemento.nombre}</span>
        <div class="d-flex flex-row product-desc">
            
            
        </div>
    </div>
    
        <h5 class="text-grey">$${elemento.precio}</h5>
    </div>
    <div onclick="removerDeCarrito(${elemento.id})" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg><i class="fa fa-trash mb-1 text-danger"></i></div>
    </div>`
  }



  if (carrito.length <1){
    contenido =` <div class="alert alert-warning" role="alert">
   Su carro esta vacio!
  </div>`
  
  }
  offcanvas.innerHTML = contenido;



}


function agregarCarrito(id){
    const eleccion  = buscarCurso(id);
    const toastRepetido = document.getElementById('liveToast-repetido')
    const mostrarRepetido = new bootstrap.Toast(toastRepetido)


    if ((carrito.some((el)=>el.id == id))){
     mostrarRepetido.show();
    } else { 
    carrito.push(eleccion); 
    contenedorUsuario.innerHTML = CarritoConBadge;
   
    const toast = document.getElementById('liveToast')
    
      
    const mostrar = new bootstrap.Toast(toast)
    
    mostrar.show()
      
    
    

  }
  
  cargarLS("ArrayCarrito", carrito);
  renderizarCarrito();

}   

function removerDeCarrito(id){
  
  let pos = carrito.findIndex(el => el.id === id);
  carrito.splice(pos, 1);
  cargarLS("ArrayCarrito", carrito);
  renderizarCarrito();
  const toast = document.getElementById('liveToast-eliminar')   
  const mostrar = new bootstrap.Toast(toast)
  mostrar.show()
  
}


// Funciones complementarias 

function descargarLS(clave){
  return JSON.parse(localStorage.getItem(clave)) || []; 
}

function cargarLS(clave,array){
  localStorage.setItem(clave, JSON.stringify(array));
}


function resumenPrecios(){
  let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio,0); 
  return total;
}

function removerBadge() {
  contenedorUsuario.innerHTML = CarritoSinBadge;
  
}

function buscarCurso(id){
  const productos = descargarLS("productos"); 
  return productos.find(item => item.id === id);
}

//COUNTDOWN
var countDownDate = new Date("Sep 14, 2022 23:59:59").getTime();
let reloj = document.getElementById("reloj"); 

var x = setInterval(function() { // countdown

  var now = new Date().getTime();
  
  var distancia = countDownDate - now;
  
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  reloj.innerHTML = `${dias} dias ${horas} horas ${minutos} minutos y ${segundos} segundos`


  
  if (distancia < 0) {
    clearInterval(x);
    reloj.innerHTML = "Finalizado!";
  }
}, 1000);

 


