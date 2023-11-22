// Mail

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const sendEmail = document.getElementById("send");

let result= "";

// evento sul click
sendEmail.addEventListener("click" ,

    function(event) {
      event.preventDefault();

      // lista mail autorizzate
      const allowedMails = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com", "mail5@gmail.com"];

      // chiedere all'utente la mail e prenderne il valore
      const userMail = document.getElementById("email").value;

      // variabile per l'accesso consentito valore partenza falso
      let accessGranted = 0;

      // Ciclo per controllo accesso
      for (let i = 0; i < allowedMails.length; i++) {
          if (userMail === allowedMails[i]) {
              accessGranted = 1;
          }
      }

      // Risultato 
      if (accessGranted) {
          result = "Welcome =)";
      } else {
          result = "Sorry your email is not on the list!";
          
      }   

      const showContainer = document.querySelector(".result");
      showContainer.classList.add("active")

          // stampa su schermo
          document.getElementById("alert").innerHTML = result
    }
)   

