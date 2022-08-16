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

log();

function log (){
  
  body.innerHTML=`  <div id="inputLog" class="inputUsuario form__group field">
  <input type="input" class="form__field" placeholder="Usuario" name="name" id="nombre" required />
  <label for="name" class="form__label">Usuario</label>
  </div> 
  <button  onclick="validarInput()" type="button" class="inputUsuario my-4 btn btn-outline-light">Entrar</button>
  ` 

  

}




function validarInput(){ 
  const nombre = document.getElementById("nombre");  
  nombre.value.length <= 1 ? style.innerHTML+=inputInvalido: validarInputLS(nombre.value);
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


}

function validarInputLS(nombre){
  var claves = Object.keys(localStorage); 
  claves.some((key)=> key == nombre) ? main(nombre) : localStorage.setItem(nombre, []), main(nombre);

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
    title.innerHTML = `  <h2 class="titulo my-4">¡Hola ${nombre}! Almacenaré tus notas.</h2>`
    
  }, 7000);

  
}


/* TENEMOS QUE TENER EN MEMORIA UN USUARIO INVITADO ok
SI EL USUARIO INGRESA UNA SOLO LETRA INVALIDAR INPUT ok
CUANDO EL USUARIO INGRESA DOS PALABRAS INVALIDAR ok
CUANDO EL USUARIO INGRESA UN VALOR CORRECTO CARGAR A LOCALSTORAGE ok



*/