const style = document.createElement("style"); 
const body = document.getElementsByTagName("body")[0];


function log (){
  const inputUsuario = document.createElement("input"); 
  style.innerHTML = `body {font-family: 'Exo 2', sans-serif; display: flex;justify-content: center; align-items: center;  background: #000; min-height: 100vh;} ${animacionesDB} `; 
  document.head.appendChild(style);
  body.innerHTML=`<h1 id="log" class="inicio text-light">Bienvenido</h1>`
  
  setTimeout(function() {
    body.innerHTML=`<h1 class="inicio text-light">Ingrese su usuario</h1>`
    inputUsuario.classList.add("inputUsuario");
    document.body.appendChild(inputUsuario);

  }, 3500);
  
  


}
