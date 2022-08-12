// DATABASE

let animacionesAlgorritmos = `#contenedor{
	-webkit-animation: slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}



    .nav-link {
        -webkit-animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    #metadatos{
        -webkit-animation: slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    #nombre{
        -webkit-animation: slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    #cartaCursos{
        -webkit-animation: slide-in-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                animation: slide-in-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    #contenedorPrincipal{
        -webkit-animation: slide-in-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                animation: slide-in-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    #imagenPrincipal {
        -webkit-animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    #navegador {
        -webkit-animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes slide-out-left {
    0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: translateX(-1000px);
                transform: translateX(-1000px);
        opacity: 0;
    }
    }


    @-webkit-keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
            filter: blur(12px);
            opacity: 0;
    }
    100% {
        -webkit-filter: blur(0px);
                filter: blur(0px);
                opacity: 1;
    }
    }
    @keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
            filter: blur(0px);
            opacity: 1;
        }
    }


    @-webkit-keyframes slide-in-right {
        0% {
        -webkit-transform: translateX(1000px);
                transform: translateX(1000px);
        opacity: 0;
        }
        100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
        }
    }
    @keyframes slide-in-right {
        0% {
        -webkit-transform: translateX(1000px);
                transform: translateX(1000px);
        opacity: 0;
        }
        100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
        }
    }
    
    #imagenPrincipal {
        height: 300px;
      }

     @-webkit-keyframes scale-in-ver-top {
       0% {
         -webkit-transform: scaleY(0);
                 transform: scaleY(0);
         -webkit-transform-origin: 100% 0%;
                 transform-origin: 100% 0%;
         opacity: 1;
       }
       100% {
         -webkit-transform: scaleY(1);
                 transform: scaleY(1);
         -webkit-transform-origin: 100% 0%;
                 transform-origin: 100% 0%;
         opacity: 1;
       }
     }
     @keyframes scale-in-ver-top {
       0% {
         -webkit-transform: scaleY(0);
                 transform: scaleY(0);
         -webkit-transform-origin: 100% 0%;
                 transform-origin: 100% 0%;
         opacity: 1;
       }
       100% {
         -webkit-transform: scaleY(1);
                 transform: scaleY(1);
         -webkit-transform-origin: 100% 0%;
                 transform-origin: 100% 0%;
         opacity: 1;
       }
     }
     
     
    `


let presentacion = ` <section class="bg-dark text-light  text-center d-flex">
<div class="container mx-5">
    <img id="imagenPrincipal" src="./Images/principal.svg" alt="" class="img-fluid max-width: 100% height: auto" >
        

    </div>
    <div class="container mx-5">
        <div class="d-sm-flex" id="box">
            <div class="px-5 w-100" id="contenedorPrincipal" >
                <h1>Elige nuestros cursos</span></h1>
                <br>
                <h5>Tras 20 años en el mercado, sabemos que es lo que <span class="text-warning">vos</span> necesitas,<br> y lo que el <span class="text-warning">mercado</span> busca.</h5>
                    <button id="boton" class="btn btn-primary btn-lg my-5">¡Quiero apuntarme!</button>
            </div>
            
            
                
        </div>

`


let CarritoConBadge = `<ul class="navbar-nav ms-auto">
    
<li class="nav-item mx-5 my-2">
    <a href="#offcanvasScrolling" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar" class="nav-link" id="carrito" onClick="removerBadge()"><img src="./Images/basket.png" width="24" alt="carrito">   <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>


    </a>
</li>
</ul>`


let CarritoSinBadge = `<ul class="navbar-nav ms-auto">
    
<li class="nav-item mx-5 my-2">
    <a href="#offcanvasScrolling" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar" class="nav-link" id="carrito"><img src="./Images/basket.png" width="24" alt="carrito"> 

    </a>
</li>
</ul>`


let canvasCarrito = `

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>`


