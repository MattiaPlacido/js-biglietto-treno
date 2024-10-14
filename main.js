// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'eta del passegero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole :
// (0.21$ per km)
// sconto del 20% per i minorenni
// sconto del 40% per over 65
// l'output del prezzo va stampato con massimo 2 decimali

// RACCOLTA DATI

//dichiarazione variabili di questa sezione
const age = parseInt(prompt("Inserisci la tua età")); //chiedo all'utente i dati e li converto in numeri
const distance = parseInt(prompt("Quanti km devi viaggiare?")); //chiedo all'utente i dati e li converto in numeri

console.log(age, distance); //da togliere
// ELABORAZIONE

//dichiarazione variabili di questa sezione
let price = distance * 0.21;
let discount = 1;
const isAgeValid = age > 0 && age < 120 && !isNaN(age); //l'età valida va da 1 a 119 anni
const isDistanceValid = distance > 0 && !isNaN(distance);

//controllo che i dati inseriti siano validi
if (!isAgeValid || !isDistanceValid) {
  if (!isAgeValid && !isDistanceValid) {
    console.log("Entrambi i dati inseriti non sono validi!");
  } else if (!isAgeValid) {
    console.log("L'età inserita non è valida!");
  } else {
    //se entrambe le condizioni precedenti non sono soddisfatte e si è dentro l'if (!isAgeValid || !isDistanceValid) questo è l'unico output rimanente, quindi non c'è bisogno di condizione
    console.log("La distanza inserita non è valida!");
  }
}

//imposto gli sconti per età
if (age < 18) {
  discount = 0.8;
} else if (age >= 65) {
  discount = 0.6;
}

//calcolo il prezzo finale
price = price * discount;

// OUTPUT
if (isAgeValid && isDistanceValid) {
  // comunico l'output solo se i dati sono validi
  console.log(`Il biglietto costa ${price}€!`);
}
