// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'eta del passegero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole :
// (0.21$ per km)
// sconto del 20% per i minorenni
// sconto del 40% per over 65
// l'output del prezzo va stampato con massimo 2 decimali

// RACCOLTA DATI
//chiedo all'utente i dati e li converto in numeri
const age = parseInt(prompt("Inserisci la tua età"));
const distance = parseInt(prompt("Quanti km devi viaggiare?"));

console.log(age, distance); //da togliere
// ELABORAZIONE
const isAgeValid = age > 0 && age < 120 && !isNaN(age); //l'età valida va da 1 a 119 anni

// OUTPUT
