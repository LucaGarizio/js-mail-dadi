// Mail

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.





// Chiedi all’utente la sua email
const userMail = prompt ("Inserisci la tua mail")
console.log(userMail);


// lista di chi può accedere
const mailsAllowed = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com", "mail4@gmail.com"];

// controllo e risultato acesso
if (mailsAllowed.includes(userMail)) {
    console.log('La tua mail è nella lista!! Benvenuto');
  } else {
    console.log('La tua mail non rientra nella lista!! Accesso negato');
  }

// stampa un messaggio appropriato sull’esito del controllo