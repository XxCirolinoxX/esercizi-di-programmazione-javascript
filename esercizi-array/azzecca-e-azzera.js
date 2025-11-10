/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/


// Creare l'array di 100 numeri casuali da 1 a 50
let numerazione = [];
for (let i = 0; i < 100; i++) {
    numerazione[i] = Math.floor(Math.random() * 50) + 1;
}

// Ciclo principale: continua finché tutti gli elementi non sono zero
while (!numerazione.every(val => val === 0)) {
    // Chiedere un numero all'utente
    let numeroUtente = Number(prompt("Inserisci un numero:"));

    // Azzerare i multipli del numero inserito
    for (let i = 0; i < numerazione.length; i++) {
        if (numerazione[i] % numeroUtente === 0) {
            numerazione[i] = 0;
        }
    }

    console.log(numerazione);
}
                               
