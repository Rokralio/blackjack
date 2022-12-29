let deck         =[]
const tipos      = ['C','D','H','S']
const especiales = ['A','J','Q','K']

let puntosJugador     = 0,
    puntosComputadora = 0

//referencias
const btnPedir = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo = document.querySelector('#btnNuevo')

const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
const puntosHTML = document.querySelectorAll('small')

const crearDeck = ()=>{
  //esta function crea una nueva baraja
  for (let i = 2; i < 10; i++) {
    for (const tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (const tipo of tipos) {
    for (const esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck
}

crearDeck();

//esta function me perdime tomar carta
const pedirCarta = ()=>{

  if (deck.length === 0) {
    throw('Se acabaron las cartas')
    
  }

  let carta = deck.pop();

  return carta
}


// pedirCarta();

const valorCarta = (carta)=>{

  const valor = carta.substring(0, carta.length -1)
  return (isNaN(valor))?
          (valor === 'A') ? 11 : 10
          : valor * 1;
}

//turno computadora
const turnoComputadora = (puntosMinimos)=>{
  do {
    const carta = pedirCarta()
    puntosComputadora = puntosComputadora + valorCarta(carta)
    puntosHTML[1].innerText = puntosComputadora
  
  
    // <img class="carta" src="assets/cartas/10C.png">
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta)

    if(puntosJugador > 21){
      break;
    }
  
  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

  setTimeout(() => {
    if(puntosComputadora === puntosMinimos){
      alert('EMPATE')
    }else if(puntosMinimos > 21) {
      alert ('Computadora Gana')
    } else if(puntosComputadora > 21){
      alert('Jugador Gana')
    } else{
      alert('Computadora Gana')
    }
  }, 100);
}

//Eventos
btnPedir.addEventListener('click', ()=>{
  const carta = pedirCarta()
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador


  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/cartas/${carta}.png`
  imgCarta.classList.add('carta')
  divCartasJugador.append(imgCarta)


  if(puntosJugador > 21) {
    btnPedir.disabled   = true
    btnDetener.disabled = true
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
})

btnDetener.addEventListener('click', ()=>{
  btnPedir.disabled   = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador)
})

btnNuevo.addEventListener('click', ()=>{

  console.clear();

  deck = [];
  deck = crearDeck();

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;
})



