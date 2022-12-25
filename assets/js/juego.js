let deck =[]
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

const crearDeck = ()=>{

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