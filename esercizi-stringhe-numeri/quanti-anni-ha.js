/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/


const annoCorrente = 2025;
const annoNascita = 1989;
const età = annoCorrente - annoNascita;
const anniMancanti = 100 - età;

console.log('età=',età);
console.log('anniMancanti=',anniMancanti);

const AnniObject = 100
const AnniAttuale = 36
