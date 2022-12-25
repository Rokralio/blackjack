let deck =[]
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

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

  console.log(deck)

  return deck
}

crearDeck();

//esta function me perdime tomar carta
const pedirCarta = ()=>{

  if (deck.length === 0) {
    throw('Se acabaron las cartas')
    
  }

  let carta = deck.pop();
  console.log(deck)
  console.log(carta)
  return carta
}

for (let i = 0; i <= 52; i++) {
  pedirCarta();
}