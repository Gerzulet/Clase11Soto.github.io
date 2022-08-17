const style = document.createElement("style"); 
const body = document.getElementsByTagName("body")[0];
style.innerHTML = `${animacionesDB} `; 
document.head.appendChild(style);
const notas  = [];



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

function log (){
  
  body.innerHTML=`  <div id="inputLog" class="inputUsuario form__group field">
  <input maxlength="9" type="input" class="form__field" placeholder="Usuario" name="name" id="nombre" required />
  <label for="name" class="form__label">Usuario</label>
  </div> 
  <button id="boton" onclick="nombreInput()" type="button" class="inputUsuario my-4 btn btn-outline-light">Entrar</button>
  ` 


} 

function logout(){
 
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
    
  }, 3000);
  
   
  
}


 function nombreInput(){ 
  const nombre = document.getElementById("nombre").value;  
  nombre.length <= 2 ? style.innerHTML+=inputInvalido : main(nombre);
  setTimeout(() => {
    style.innerHTML=`body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-size: 1.5rem;
    }`;
  }, 900);

  cargarSS("Usuario", nombre);


} 


function main(nombre){
  style.innerHTML+=loginDesvanecer;
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


/* TENEMOS QUE TENER EN MEMORIA UN USUARIO INVITADO ok
SI EL USUARIO INGRESA UNA SOLO LETRA INVALIDAR INPUT ok
CUANDO EL USUARIO INGRESA DOS PALABRAS INVALIDAR ok
CUANDO EL USUARIO INGRESA UN VALOR CORRECTO CARGAR A LOCALSTORAGE ok

*/

function mensajesAleatorio(nombre){
  const array = [`Hola ${nombre}, almacenaré tus notas aca.`, `${nombre},no olvides más!`, `Casilla de Notas`,`Hola, como estas? Dejame ayudarte.`, `No olvides darle al boton de play abajo.`, `Veras notas de varios usuarios aca abajo`]; 
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];

    return item;
}

function agregarNotas(){
  const notasHechas = descargarLS("notas") || [];
  const tituloNota = document.getElementById("tituloNota").value || "Sin Titulo"; 
  
  const importanciaNota = document.getElementById("importanciaNota").value || "Normal"; 
  const notaTextArea = document.getElementById("notaTextArea").value || "¿Se le habrá olvidado poner algo?";
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


}
function eliminarNota(id){
  const notasHechas = descargarLS("notas") || [];
  let pos = notasHechas.findIndex(el => el.id === id);

  notasHechas.splice(pos, 1);
  cargarLS("notas", notasHechas);
  renderizarNotas();
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
function trashDesarollo(){
  const mensaje = document.getElementById("mensajeDesarrollo");
  mensaje.innerText="En Desarrollo"; 

  setTimeout(() => {
  mensaje.innerText=""; 
    
  }, 2000);
}
function renderizarCanvas(id){
  const notasHechas = descargarLS("notas");
  console.log(notasHechas)
  const datos = notasHechas.find((el) =>  el.id == id);
  
    let plantillaNota=
    `<div class="offcanvas-header">
    <h5 class="offcanvas-title text-light" id="offcanvasTopLabel">${datos.nombre}
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
    <img class="bar mx-3" src="./Images/pen-fill.svg" alt="">
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

function recogerNombre(nombre){
  return nombre;
}
function cargarLS(clave,valor){
  localStorage.setItem(clave,JSON.stringify(valor));
}

function descargarLS(clave){
  const valor = JSON.parse(localStorage.getItem(clave));
  return valor;
}

function cargarSS(clave,valor){
  sessionStorage.setItem(clave,JSON.stringify(valor));
}

function descargarSS(clave){
  const valor = JSON.parse(sessionStorage.getItem(clave));
  return valor;
}
