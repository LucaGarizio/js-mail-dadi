
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.




const gameStart = document.getElementById("start");


gameStart.addEventListener("click", 

    function() {

    // Generare un numero random da 1 a 6 per il giocatore 
        const userNumber = Math.floor(Math.random() * 6) +1;
        console.log(userNumber);

    // Generare un numero random da 1 a 6 per il computer. 
        const pcNumber = Math.floor(Math.random() * 6) +1;
        console.log(pcNumber);


    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
        let risultato;

        if (userNumber > pcNumber) {
        risultato = ("Hai vinto")
        } else if(pcNumber > userNumber) {
        risultato = ("Hai perso");
        } else if (userNumber === pcNumber) {
        risultato = ("Pareggio");
        }
        
        console.log(risultato);

        document.getElementById("col-user").innerHTML = `Il tuo numero: ${userNumber}`;

        document.getElementById("col-result").innerHTML = risultato;

        document.getElementById("col-pc").innerHTML = `Numero sfidante: ${pcNumber}` ;
    }
)



