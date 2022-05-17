const nomeUtente = prompt (`Nome?`);
const cognomeUtente = prompt (`Cognome?`);
const annoNascita = prompt (`Anno di nascita?`);
const prefColor = prompt  (`Qual'è il tuo colore preferito?`);
const annoAttuale = 2022;
const eta = ( annoAttuale - annoNascita);



console.log(nomeUtente , cognomeUtente , eta , prefColor);


document.getElementById("nome-utente").innerHTML =`Benvenuto ${nomeUtente} ${cognomeUtente}`;
document.getElementById("actual-age").innerHTML =`Attualmente hai ${eta} anni!`;
document.getElementById("colore-pref").innerHTML =`Ed il tuo colore preferito è il ${prefColor}`;



document.getElementById("info-user").innerHTML =`<span> Benvenuto ${nomeUtente} ${cognomeUtente}</span><br>
                                                <span>Attualmente hai ${eta} anni!</span><br>
                                                <span>Ed il tuo colore preferito e il ${prefColor}</span>`