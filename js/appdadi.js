/**Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// generare un numero da uno a sei

const numeroUser = Math.floor(Math.random() * 6) + 1

// generare un numero da uno a sei

const numeroPC = Math.floor(Math.random() * 6) + 1

console.log(numeroUser, numeroPC)

let message = 'Pareggio'

if(numeroUser > numeroPC) {
    message = 'Hai Vinto'
}else if(numeroPC > numeroUser){
    message = 'Hai Perso'
}
    
console.log(message)
