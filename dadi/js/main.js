
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.



// var declaration to start the game
const gameStart = document.getElementById("start");

// add event on click
gameStart.addEventListener("click", 

    function() {

    // Create userplayer random number from 1 to 6
        const userNumber = Math.floor(Math.random() * 6) +1;
        console.log(userNumber);

    // Create NPC random number from 1 to 6
        const pcNumber = Math.floor(Math.random() * 6) +1;
        console.log(pcNumber);


    // determine who will win
        let risultato;

        if (userNumber > pcNumber) {
        risultato = ("Hai vinto")
        } else if(pcNumber > userNumber) {
        risultato = ("Hai perso");
        } else if (userNumber === pcNumber) {
        risultato = ("Pareggio");
        }
        
        console.log(risultato);

        //result  print on screen 
        document.getElementById("col-user").innerHTML = `Il tuo numero: ${userNumber}`;

        document.getElementById("col-result").innerHTML = risultato;

        document.getElementById("col-pc").innerHTML = `Numero sfidante: ${pcNumber}` ;
    }
)



