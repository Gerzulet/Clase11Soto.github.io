// DATABASE

let animacionesDB = `
#offcanvasTop{
  background-color: black;
  border-color: white;
  font-family:'Courier New', Courier, monospace; 
  height: 400px;
  
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
}

.inputUsuario {
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


     
    `


let inputInvalido = `

#inputLog {
	-webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes shake-horizontal {
 0%,
 100% {
   -webkit-transform: translateX(0);
           transform: translateX(0);
 }
 10%,
 30%,
 50%,
 70% {
   -webkit-transform: translateX(-10px);
           transform: translateX(-10px);
 }
 20%,
 40%,
 60% {
   -webkit-transform: translateX(10px);
           transform: translateX(10px);
 }
 80% {
   -webkit-transform: translateX(8px);
           transform: translateX(8px);
 }
 90% {
   -webkit-transform: translateX(-8px);
           transform: translateX(-8px);
 }
}
@keyframes shake-horizontal {
 0%,
 100% {
   -webkit-transform: translateX(0);
           transform: translateX(0);
 }
 10%,
 30%,
 50%,
 70% {
   -webkit-transform: translateX(-10px);
           transform: translateX(-10px);
 }
 20%,
 40%,
 60% {
   -webkit-transform: translateX(10px);
           transform: translateX(10px);
 }
 80% {
   -webkit-transform: translateX(8px);
           transform: translateX(8px);
 }
 90% {
   -webkit-transform: translateX(-8px);
           transform: translateX(-8px);
 }
}

`
let loginDesvanecer = `#inputLog {
	-webkit-animation: fade-out 1s ease-out both;
	        animation: fade-out 1s ease-out both;
}

 @-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`

let pagPrincipal = ` <div id="pagPrincipal" class="container  ">
<div class="row my-4 ">
  <div id="title" class="col border border-light text-light text-center">
  </div>
  <div class="col-1  mx-4 my-4">
    <a href="#">
      <img src="./Images/door-open.svg" alt="Logout" id="logout">

    </a>
  </div>
</div>
<div class="resumen row ">
  <div class="col border border-light ">
    <div class="row my-2 ">
      <div class="col-3  mx-5 text-light">
        Nombre
      </div>
      <div class="col-2  mx-4 text-light">
        Fecha
      </div>
      <div class="col-1  mx-2 text-light">
        Usuario
      </div>
      <div class="col-2  mx-4 text-light">
        Importancia
      </div>
      <div class="col-1   text-light">
        Flag
      </div>


      <div id="notas" class="row my-3 overflow-auto">
      
      <a class="col-3 mx-5 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Clase de algebra</a>  
      
        <div class="col-2 mx-4 text-light">
          24/08/22
        </div>
        <div class="col-1 mx-4 text-light">
          German
        </div>
        <div class="col-2  text-light text-center">
          Alta
        </div>
        <div class="col-1  mx-4 text-light text-center">
          <a  href="#"><img class="bandera" src="./Images/flag.svg" alt=""></a>
        </div>
      </div>
     
    
    </div>
    
    
  
  </div >
  <div class="col-1 border border-light mx-4 fixed-right ">
    <div class="col text-center my-5">
    <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><img class="bar" src="./Images/plus.svg" alt="Add"></a>
    </div>
    <div class="col text-center my-5">
    <a href="#"><img class="bar" src="./Images/trash.svg" alt=""></a>
    </div>
    <div class="col text-center my-5 ">
      <a href="#"><img class="bar" src="./Images/info.svg" alt=""></a>
      </div>
      <div class="col text-center my-5">
      <a href="#"><img class="bar" src="./Images/play.svg" alt=""></a>
      </div>
      <div class="col text-center my-5">
        <img class="cat" src="./Images/cat.png" alt="">
        </div>
    </div>
     
  </div>
 
</div>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">El nombre del titulo
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
    <img class="bar mx-3" src="./Images/pen-fill.svg" alt="">
    </button></h5>
    

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="row">
      <div class="col"> 
        <div class="row text-light m-3">Usuario</div> 
        <div class="row text-light m-3">Importancia</div> 
      </div>
      <div class="col text-light text-center"> Form field </div>
    </div>
  </div>
</div>




<div class="offcanvas offcanvas-bottom text-center" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title text-light " id="offcanvasBottomLabel"> 
    <button  type="button" class="btn-close mx-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <img class="bar" src="./Images/add.svg" alt="">
    </button></h5>
    <button  type="button" class="btn-close mx-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <img class="bar " src="./Images/trash.svg" alt="">
    </button>
  </div>
  <div id="offcanvasBody" class="offcanvas-body small">
  <div class="row my-2">
    <div  class="form__group field col mx-1">
      <input type="input" class="form__field" placeholder="Titulo" name="name" id="tituloNota" required />
      <label for="name" class="form__label">Titulo</label>
  </div> 
  <div class="form__group field row mx-1">
        <select class="form__field" id="validationDefault04" required>
          <option selected disabled value="">Importancia</option>
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
          </select>
  </div>
  

    <div class="mb-3">
  <textarea  class="form__field" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
</div>
</div>

 
</div>





`