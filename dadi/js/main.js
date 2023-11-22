
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6 per il giocatore 
const userNumber = Math.floor(Math.random() * 6) +1;
console.log(userNumber);

// Generare un numero random da 1 a 6 per il computer. 
const pcNumber = Math.floor(Math.random() * 6) +1;
console.log(pcNumber);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let risultato;
if (userNumber > pcNumber) {
    risultato = ("hai vinto")
} else if(pcNumber > userNumber) {
    risultato = ("hai perso");
} else if (userNumber === pcNumber) {
    risultato = ("pareggio")
}
console.log(risultato);


