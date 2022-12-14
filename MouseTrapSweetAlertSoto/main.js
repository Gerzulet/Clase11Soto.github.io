const style = document.createElement("style"); 
const body = document.getElementsByTagName("body")[0];
style.innerHTML = `${animacionesDB} `; 
document.head.appendChild(style);
const notas  = [];


function enterLog(){
  if (event.keyCode === 13) {
    document.getElementById("botonLog").click();
  }
}

class note {
  constructor(id,nombre,usuario,fecha,importancia,info) {
    this.id=id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.fecha = fecha;
    this.importancia = importancia;
    this.info = info;
    
  }
}

log();




//Funciones principales

function log (){
  
  body.innerHTML=` 
  <img class="inputUsuario" style="width:150px; height: 150px;" src="./Images/cat.png" alt="imagen de gato"></img>
   <div id="inputLog" class="inputUsuario form__group field">
  <input maxlength="9" type="input" class="form__field" placeholder="No utilice espacios." name="name" id="nombre" required />
  <label id="UsuarioLabel" for="name" class="form__label">Usuario</label>
  </div> 
  <button id="botonLog" onclick="nombreInput()" type="button" class="inputUsuario my-4 btn btn-outline-light">Presione Enter</button>
  ` 
   body.addEventListener("keypress", enterLog);

} 



function logout(){
  style.innerHTML+=`.swa2-popup {
    background-color:black;
    border: 3px solid white;
  }
  .swal2-modal {
    background-color:black;
    border: 3px solid white;
  }
  .swal2-show{
    background-color:black;
    border: 3px solid white;
  }


 `
  Swal.fire({
    title: 'Estas seguro de que quieres salir??',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#1e1c10',
    cancelButtonColor: '#1e1c10',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'

  }).then((result) => {
    if (result.isConfirmed) {
      

      style.innerHTML+=pagPrincipalDesvanecer;
  
      setTimeout(() => {
        style.innerHTML=`body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-size: 1.5rem;
        }
        #salir{
          -webkit-animation: fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                  animation: fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }
        
        
        
        
        
        @-webkit-keyframes fade-in {
         0% {
           opacity: 0;
         }
         100% {
           opacity: 1;
         }
        }
        @keyframes fade-in {
         0% {
           opacity: 0;
         }
         100% {
           opacity: 1;
         }
        }
        `;
        body.innerHTML=` <h1 id="salir" class="text-light"> Gracias </div>` 
        
      }, 2000);
      
      setTimeout(() => {
        history.go(0);
      }, 6000);
       
    }
  })
 
  
}


 function nombreInput(){ 
  const nombre = document.getElementById("nombre").value;  
  nombre.length <= 2 ? inputNoValido() : hayEspacio(nombre) ? inputNoValido() : main(nombre);
  setTimeout(() => {
    style.innerHTML=`body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-size: 1.5rem;
    }
   `;
  }, 900);
  cargarSS("Usuario", nombre);


} 


function main(nombre){
  style.innerHTML+=loginDesvanecer;
  body.removeEventListener("keypress",enterLog);

  setTimeout(() => {
    if (nombre[nombre.length-1]=="a"){
      body.innerHTML=`  <h1 style="font-family: "'Courier New', Courier, monospace" class="text-light" id="bienvenida"> Bienvenida, ${nombre}. <h1>
      ` } else {
        body.innerHTML=`  <h1 style="font-family: "'Courier New', Courier, monospace" class="text-light" id="bienvenida"> Bienvenido, ${nombre}. <h1> `
      }
    }, 600);
    
    setTimeout(() => {
      style.innerHTML = "";
      body.innerHTML= pagPrincipal;
      const title = document.getElementById("title");
      title.innerHTML = `  <h2 class="titulo my-4">Bienvenido ${nombre}</h2>`
      renderizarNotas();

       setInterval(() => {
      title.innerHTML = `  <h2 class="titulo my-4">${mensajesAleatorio(nombre)}</h2>`
      }, 9000); 
      
    
  }, 7000);

  
}


function agregarNotas(){
  const notasHechas = descargarLS("notas") || [];
  const tituloNota = document.getElementById("tituloNota").value || "Sin Titulo"; 
  
  const importanciaNota = document.getElementById("importanciaNota").value || "Normal"; 
  const notaTextArea = document.getElementById("notaTextArea").value || "??Se le habr?? olvidado poner algo? :|";
  let usuario = descargarSS("Usuario")
  var today = new Date();
  const id = notasHechas.length;
  var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  
  
  const nota = new note(id,tituloNota,usuario,date,importanciaNota,notaTextArea); 
  
  
  const notasFinales = [...notasHechas, nota]
  cargarLS("notas", notasFinales);
  renderizarNotas();
  
  document.getElementById("tituloNota").value = "";
  document.getElementById("importanciaNota").value ="";
  document.getElementById("notaTextArea").value = "";
  minimizarAgregarNotas()

}


function renderizarNotas(){
  const notasHechas = descargarLS("notas"); 
  

  let plantillaNota = "";

 for (const nota of notasHechas){
    plantillaNota+=`<a onclick="renderizarCanvas(${nota.id})" class="col-3 mx-5 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">${nota.nombre}</a>  

    <div class="col-2 mx-4 text-light">
      ${nota.fecha}
    </div>
    <div class="col-1 mx-4 text-light">
      ${nota.usuario}
    </div>
    <div class="col-2  text-light text-center">
      ${nota.importancia}
    </div>
    <div class="col-1  mb-2 mx-4 text-light text-center">
      <a  onclick="eliminarNota(${nota.id}) "href="#"><img class="bandera" src="./Images/trash.svg" alt=""></a>
    </div>
  `
  }

  document.getElementById("contenedorNotas").innerHTML = plantillaNota;

}


function renderizarCanvas(id){
  const notasHechas = descargarLS("notas");
  const datos = notasHechas.find((el) =>  el.id == id);
  
    let plantillaNota=
    `<div class="offcanvas-header">
    <h5 class="offcanvas-title text-light" id="offcanvasTopLabel">${datos.nombre}
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
    </button></h5>
    

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="row">
      <div class="col"> 
        <div class="row text-light m-3">Usuario: ${datos.usuario}</div> 
        <div class="row text-light m-3">Importancia: ${datos.importancia}</div> 
      </div>
      <div class="col text-light text-center">${datos.info}</div>
    </div>
  </div>
  `
  

  document.getElementById("offcanvasTop").innerHTML = plantillaNota;


}

// Funciones complementarias 

function hayEspacio(string) {
  return string.indexOf(' ') >= 0;
}

function inputNoValido(){
  style.innerHTML+=inputInvalido; 
  document.getElementById("UsuarioLabel").innerHTML = "Ingrese mas de dos caracteres y sin espacios.";
  setTimeout(() => {
  document.getElementById("UsuarioLabel").innerHTML = "Usuario";
    
  }, 2000);
}

function mensajesAleatorio(nombre){
  const array = [`Hola,almacenar?? tus notas aca.`,`Mira los atajos con ALT + A`, `${nombre},no olvides m??s!`, `Casilla de Notas`,`Hola, como estas? Dejame ayudarte.`,  `Veras notas de varios usuarios aca abajo`,  `Mira las notas que los demas dejaron.`]; 
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];

    return item;
}

function eliminarNota(id){
  const notasHechas = descargarLS("notas") || [];
  let pos = notasHechas.findIndex(el => el.id === id);

  notasHechas.splice(pos, 1);
  cargarLS("notas", notasHechas);
  renderizarNotas();
}



function enDesarollo(){
  style.innerHTML+=`.swa2-popup {
    background-color:black;
    border: 3px solid white;
  }
  .swal2-modal {
    background-color:black;
    border: 3px solid white;
  }
  .swal2-show{
    background-color:black;
    border: 3px solid white;
  }
 `
  Swal.fire({
    title: 'En construccion!',
    imageUrl: imagenAleatoria(),
    imageWidth: 300,
    imageHeight: 300,
    background:'black',
    width: 500, 
    confirmButtonColor: '#000000'   
  })
}

function imagenAleatoria(){
  const array = [`./Images/workercat1.jpg`, `./Images/workercat2.gif`, `./Images/workercat3.jpg`,  `./Images/workercat4.gif`]; 
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];

    return item;
}

//Funciones complementarias de Canvas + Mousetrap
function canvasMinimze(){
  document.getElementById("offcanvasExample").className = "offcanvas offcanvas-start hiding";
    const offcanvasExample = document.getElementById('offcanvasExample');
  offcanvasExample.classList.remove("show"); 
  setTimeout(() => {
    offcanvasExample.classList.remove("hiding"); 
    
  }, 500);
  eliminarBackdrop()
  const body = document.getElementById("body"); 
  body.removeAttribute("style");


}

function mostrarInfo(){

  document.getElementById("offcanvasExample").className = "offcanvas offcanvas-start show";
  const backdrop = document.createElement("div"); 
  backdrop.className="offcanvas-backdrop fade show"; 
  document.body.append(backdrop);

  document.body.addEventListener("click", () => {
    document.getElementById("offcanvasExample").className = "offcanvas offcanvas-start hiding";
    const offcanvasExample = document.getElementById('offcanvasExample');
  offcanvasExample.classList.remove("show"); 
  setTimeout(() => {
    offcanvasExample.classList.remove("hiding"); 
    
  }, 500);
  eliminarBackdrop()
  const body = document.getElementById("body"); 
  body.removeAttribute("style");
})
}

function canvasNotas(){
  document.getElementById("offcanvasBottom").className = "offcanvas offcanvas-bottom show";
  const backdrop = document.createElement("div"); 
  backdrop.className="offcanvas-backdrop fade show"; 
  document.body.append(backdrop);
}
function minimzarCanvasTop(){
  document.getElementById("offcanvasTop").className = "offcanvas offcanvas-top hiding";
    const offcanvasTop = document.getElementById('offcanvasTop');
  offcanvasTop.classList.remove("show"); 
  setTimeout(() => {
    offcanvasTop.classList.remove("hiding"); 
    
  }, 500);
  eliminarBackdrop()
  const body = document.getElementById("body"); 
  body.removeAttribute("style");

  document.body.addEventListener("click", () => {
    document.getElementById("offcanvasTop").className = "offcanvas offcanvas-top hiding";
    const offcanvasTop = document.getElementById('offcanvasTop');
  offcanvasTop.classList.remove("show"); 
  setTimeout(() => {
    offcanvasTop.classList.remove("hiding"); 
    
  }, 500);
  eliminarBackdrop()
  const body = document.getElementById("body"); 
  body.removeAttribute("style");
})

}
function minimizarAgregarNotas(){
    const offcanvasBottom = document.getElementById('offcanvasBottom');
    offcanvasBottom.className = "offcanvas offcanvas-bottom hiding";
  offcanvasBottom.classList.remove("show"); 
  setTimeout(() => {
    offcanvasBottom.classList.remove("hiding"); 
    
  }, 500);
  eliminarBackdrop()
  const body = document.getElementById("body"); 
  body.removeAttribute("style");
}
function eliminarBackdrop(){
  const backdrop = document.getElementsByClassName("offcanvas-backdrop")[0]; 
  backdrop ? backdrop.remove() : console.log("offcanvas cerrado") 
}
// Funciones de Storage

function cargarLS(clave,valor){
  localStorage.setItem(clave,JSON.stringify(valor));
}

function descargarLS(clave){
  const valor = JSON.parse(localStorage.getItem(clave)) ?? [];
  return valor;
}

function cargarSS(clave,valor){
  sessionStorage.setItem(clave,JSON.stringify(valor));
}

function descargarSS(clave){
  const valor = JSON.parse(sessionStorage.getItem(clave));
  return valor;
}
