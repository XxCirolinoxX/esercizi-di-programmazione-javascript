/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

let guardie = [];
let detenuti = [];
let fascicoli = [];

// Funzione: Aggiungi una guardia
Function assumiGuardia(nome,cognome,matricola) {guardie.push({
  nome:nome,
    cognome:cognome,
    matricola:matricola,
});
    //Funzione: Registra un detenuto
                                                Function registraDetenuto(nome,cognome,idDetenuto) {detenuti.push{
                                                  nome:nome,
                                                    cognome:cognome,
                                                    idDetenuto:idDetenuto,
                                                    stato: "carcerato"; //stato iniziale
                                                });
                                                                                                    //aggiungi un fascicolo
                                                                                                    Function AggiungiFascicolo (idDetenuti,dataIn,DataOut,Crimine) {fascicoli.push{
                                                                                                      idDetenuti:idDetenuti,
                                                                                                        DataIn:Datain,
                                                                                                        DataOut:DataOut,
                                                                                                        Crimine:Crimine,
                                                                                                          });
                                                                                                                                                                    
             //Funzione visualizza Liste
                                                                                                                                                                    Function mostraGuardie (){console.log("Guardie:" Guardie);}
                                                                                                                                                                    Function mostraDetenuti (){console.log("Detenuti:"Detenuti);}
                                                                                                                                                                    Function mostraFascicoli (){console.log("Fascicoli:"Fascicoli);}
                                                                                                                                                                    // FUNZIONE: cerca fascicolo tramite nome
function cercaFascicoloPerNome(nome) {
  let detenutoTrovato = detenuti.find(d => d.nome === nome);
  if (!detenutoTrovato) return console.log("Nessun detenuto trovato.");

  let fascicoliTrovati = fascicoli.filter(f => f.idDetenuto === detenutoTrovato.id);
  console.log("Fascicoli trovati:", fascicoliTrovati);
}

// FUNZIONI PER EVASIONE / DECESSO
function evaso(idDetenuto) {
  let d = detenuti.find(d => d.id === idDetenuto);
  if (d) d.stato = "evaso";
}

function deceduto(idDetenuto) {
  let d = detenuti.find(d => d.id === idDetenuto);
  if (d) d.stato = "deceduto";
}

// FUNZIONE DI RIEPILOGO FINALE
function riepilogoCarcere() {
  let totGuardie = guardie.length;
  let totDetenuti = detenuti.length;
  let evasi = detenuti.filter(d => d.stato === "evaso").length;
  let morti = detenuti.filter(d => d.stato === "deceduto").length;

  console.log("----- RIEPILOGO CARCERE -----");
  console.log("Guardie:", totGuardie);
  console.log("Detenuti totali:", totDetenuti);
  console.log("Detenuti evasi:", evasi);
  console.log("Detenuti deceduti:", morti);
  console.log("------------------------------");
}


