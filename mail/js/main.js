// Mail

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



// Chiedi all’utente la sua email
const userMail = prompt ("Inserisci la tua mail")
console.log(userMail);


// lista di chi può accedere
const mailsAllowed = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com", "mail5@gmail.com"];


let accessGranted = 0;

// Ciclo for per controllare l'accesso
for (let i = 0; i < mailsAllowed.length; i++) {
    if (userMail === mailsAllowed[i]) {

        accessGranted = 1;     
    }
}

// Stampa un messaggio appropriato sull'esito del controllo
if (accessGranted) {
    alert("Welcome");
} else {
    alert("Sorry your email is not on the list.");
}

