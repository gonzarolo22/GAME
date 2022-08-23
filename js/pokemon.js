window.addEventListener('load', iniciarJuego)
let ataqueJugador=""
let ataqueEnemigo=""
let vidasEnemigo=3
let vidasJugador=3


function iniciarJuego(){
  let botonPokemonJugador = document.getElementById('boton-pokemon')
  botonPokemonJugador.addEventListener('click',seleccionarPokemonJugador)

  let botonAtaqueFuego = document.getElementById('boton-fuego')
  botonAtaqueFuego.addEventListener('click', seleccionaAtaqueFuego)

  let botonAtaqueAgua= document.getElementById('boton-agua')
  botonAtaqueAgua.addEventListener('click',seleccionaAtaqueAgua)

  let botonAtaqueTierra=document.getElementById('boton-tierra')
  botonAtaqueTierra.addEventListener('click', seleccionaAtaqueTierra)

  let BotonReiniciar=document.getElementById('boton-reiniciar')
  BotonReiniciar.addEventListener('click',reiniciar)
  BotonReiniciar.style.display='none'
  
  let ataque=document.getElementById('seleccionar-ataque')
  ataque.style.display='none'

} 
function numeroEntre(min,max){
  return Math.floor(Math.random()*(max-min+1)+1)
}
function seleccionarPokemonJugador(){
  let ataque=document.getElementById('seleccionar-ataque')
    ataque.style.display='block'                                //aca oculto selecionador de pokemon y muestro la seccion seleccionar ataque
    let eleccion=document.getElementById('elije-tu-pokemon')
    eleccion.style.display='none'


  let charizard=document.getElementById('charizard')
  let pikachu=document.getElementById('pikachu')
  let eleccionP=document.getElementById('pokemon-eleccion')
    if(charizard.checked){
      eleccionP.innerHTML='charizard'
    }
    else if(pikachu.checked){
    eleccionP.innerHTML='pikachu'
    }
    else{alert("no elejiste nada")}

    seleccionarPokemonEnemigo()

}
function seleccionarPokemonEnemigo(){ 
  let caleatorio=document.getElementById('Caleatorio')
  let variable=numeroEntre(1,2)

    if (variable==1){
      caleatorio.innerHTML="charizar"
    }
    else{
      caleatorio.innerHTML="pikachu"
    }

}
function seleccionaAtaqueFuego(){
    
    ataqueJugador="FUEGO"
    
    

  
ataqueEnemigoAleatorio()
}
function seleccionaAtaqueAgua(){
    ataqueJugador="AGUA"
  

ataqueEnemigoAleatorio()
}
function seleccionaAtaqueTierra(){
    ataqueJugador="TIERRA"
  

ataqueEnemigoAleatorio()
} 
function ataqueEnemigoAleatorio(){
  let numeroAleatorio = numeroEntre(1,3)
 
  if (numeroAleatorio==1){
    ataqueEnemigo="FUEGO"
    
    combate()

    
  }
  else if (numeroAleatorio==2){
    ataqueEnemigo="AGUA"  
    
    combate()
  }  
  else{
    ataqueEnemigo="TIERRA"
    
    combate()
    
  }

  
}
function combate(){
  
  if(ataqueJugador==ataqueEnemigo){
    crearMenzaje("empate")
  }
  else if(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
    crearMenzaje("ganaste")
    ContadorVidasEnemigo()
  }
  else if(ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO"){
  crearMenzaje("ganaste")
    ContadorVidasEnemigo()
}
  else if(ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
    crearMenzaje("ganaste")
    ContadorVidasEnemigo()
}
else{
  crearMenzaje("perdiste")
    ContadorVidasUsuario()
}
}
function crearMenzaje(resultado) {
  let parrafo= document.createElement('p')
  parrafo.innerHTML="tu pokemon ataco con "+ ataqueJugador+" el pokemon enemigo ataco con "+ataqueEnemigo +" "+ resultado
  let menzaje=document.getElementById('mensajes')
  menzaje.appendChild(parrafo)
}
function ContadorVidasUsuario(){
    vidasJugador--
    let vidasU=document.getElementById('vidasU')
    vidasU.innerHTML=vidasJugador
    gameOver()
}
function ContadorVidasEnemigo(){
  vidasEnemigo--
  let vidasE=document.getElementById('vidasE')
  
  vidasE.innerHTML=vidasEnemigo
  gameOver()
}
function gameOver(){
  let BotonReiniciar=document.getElementById('boton-reiniciar')
  let mensaje= document.getElementById('mensajes')
  let resultado=document.createElement('p')
  
  if(vidasEnemigo==0){
      resultado.innerHTML="felicitaciones GANASTE"
      mensaje.appendChild(resultado)
      let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.disabled=true

    let botonAtaqueAgua= document.getElementById('boton-agua')
    botonAtaqueAgua.disabled= true

    let botonAtaqueTierra=document.getElementById('boton-tierra')
    botonAtaqueTierra.disabled= true
    BotonReiniciar.style.display='block'
  }
   else if(vidasJugador==0){
    resultado.innerHTML="mal ahi perdiste"
    mensaje.appendChild(resultado)
    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.disabled= true

    let botonAtaqueAgua= document.getElementById('boton-agua')
    botonAtaqueAgua.disabled= true

    let botonAtaqueTierra=document.getElementById('boton-tierra')
    botonAtaqueTierra.disabled= true
    BotonReiniciar.style.display='block'
  }
  
  
  
    
  

}
function reiniciar(){
    location.reload()
}

