let deck =[]
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

let puntosJugador = 0,
    puntosComputadora = 0

//referencias
const btnPedir = document.querySelector('#btnPedir')

let puntosHTML = document.querySelectorAll('small')

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

//Eventos
btnPedir.addEventListener('click', ()=>{
  const carta = pedirCarta()
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador
})

