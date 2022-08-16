const style = document.createElement("style"); 
const body = document.getElementsByTagName("body")[0];
style.innerHTML = `${animacionesDB} `; 
document.head.appendChild(style);



class notes {
  constructor(nombre,fecha,importancia,flag) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.importancia = importancia;
    this.flag = flag;
    
  }
}

/* log();

function log (){
  
  body.innerHTML=`  <div id="inputLog" class="inputUsuario form__group field">
  <input type="input" class="form__field" placeholder="Usuario" name="name" id="nombre" required />
  <label for="name" class="form__label">Usuario</label>
  </div> 
  <button  onclick="validarInput()" type="button" class="inputUsuario my-4 btn btn-outline-light">Entrar</button>
  ` 

  

} */




/* function validarInput(){ 
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

  


} */


function main(nombre){
  style.innerHTML+=loginDesvanecer;
  setTimeout(() => {
    if (nombre[nombre.length-1]=="a"){
      body.innerHTML=`  <h1 style="font-family: "'Courier New', Courier, monospace" class="text-light" id="bienvenida"> Bienvenida, ${nombre}. <h1>
      ` } else {
        body.innerHTML=`  <h1 style="font-family: "'Courier New', Courier, monospace" class="text-light" id="bienvenida"> Bienvenido, ${nombre}. <h1> `
      }
    }, 600);
    
   // setTimeout(() => {
      style.innerHTML = "";
      body.innerHTML= pagPrincipal;
      const title = document.getElementById("title");
      title.innerHTML = `  <h2 class="titulo my-4">Bienvenido ${nombre}</h2>`

       setInterval(() => {
      title.innerHTML = `  <h2 class="titulo my-4">${mensajesAleatorio(nombre)}</h2>`
        
      //}, 9000); 
      
    
  }, 7000);

  
}

main();

/* TENEMOS QUE TENER EN MEMORIA UN USUARIO INVITADO ok
SI EL USUARIO INGRESA UNA SOLO LETRA INVALIDAR INPUT ok
CUANDO EL USUARIO INGRESA DOS PALABRAS INVALIDAR ok
CUANDO EL USUARIO INGRESA UN VALOR CORRECTO CARGAR A LOCALSTORAGE ok

*/

function mensajesAleatorio(nombre){
  const array = [`Hola ${nombre}, almacenaré tus notas aca.`, `${nombre},no olvides más!`, `Notas`,`Hola, como estas? Dejame ayudarte.`, `No olvides darle al boton de play abajo.`, `Veras notas de varios usuarios aca abajo`]; 
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];

    return item;
}