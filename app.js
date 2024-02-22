let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { ///Una funcion hace una accion
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}` ); //ojo en las comillas intervitas
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor' );
        } else  {
            asignarTextoElemento('p','El numero secreto es mayor' );
    }
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si ya sorteamos todos los nuemros 
   if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sorteraon todos los numeros posibles')
   } else {
   
   //Si el numero genrado esta incluido en la lista 
    
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
      } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
      }
  }
}


function condicionesIniciales() {
    asignarTextoElemento('h1' , 'Juego del numero secreto');
    asignarTextoElemento('p' , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio    
    //iniciaalizar el numero de intentos   
    condicionesIniciales();  
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


///la conexion del index con la app es con un scrip,  ver scrip casi al final del index de html          <script src="app.js"></script> 
