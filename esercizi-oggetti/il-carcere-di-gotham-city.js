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


// === Carcere di Gotham City ===

// Banche dati principali
let guardie = [];
let detenuti = [];
let fascicoli = [];

// === Funzione per assumere una nuova guardia ===
function assumiGuardia(nome, cognome, eta, grado) {
  const nuovaGuardia = {
    nome: nome,
    cognome: cognome,
    eta: eta,
    grado: grado
  };
  guardie.push(nuovaGuardia);
  console.log(`Guardia assunta: ${nome} ${cognome}, ${eta} anni, grado: ${grado}`);
}

// === Funzione per schedare un nuovo detenuto ===
function schedulaDetenuto(nome, cognome, eta, stato) {
  const nuovoDetenuto = {
    id: detenuti.length + 1, // identificativo univoco
    nome: nome,
    cognome: cognome,
    eta: eta,
    stato: stato // "detenuto", "evaso", "deceduto"
  };
  detenuti.push(nuovoDetenuto);
  console.log(`Detenuto schedato: ${nome} ${cognome}, ${eta} anni, stato: ${stato}`);
}

// === Funzione per aggiungere un fascicolo ===
function aggiungiFascicolo(detenutoId, dataCarcerazione, dataScarcerazione, crimine) {
  const nuovoFascicolo = {
    detenutoId: detenutoId,
    dataCarcerazione: dataCarcerazione,
    dataScarcerazione: dataScarcerazione,
    crimine: crimine
  };
  fascicoli.push(nuovoFascicolo);
  console.log(`Fascicolo aggiunto per detenuto ID: ${detenutoId}`);
}

// === Funzione per visualizzare gli elenchi ===
function mostraElenchi() {
  console.log("Elenco Guardie:", guardie);
  console.log("Elenco Detenuti:", detenuti);
  console.log("Elenco Fascicoli:", fascicoli);
}

// === Funzione per cercare un fascicolo per nome del detenuto ===
function cercaFascicoloPerNome(nome) {
  const detenuto = detenuti.find(d => d.nome.toLowerCase() === nome.toLowerCase());
  if (!detenuto) {
    console.log(`Nessun detenuto trovato con nome: ${nome}`);
    return;
  }

  const fascicoliDetenuto = fascicoli.filter(f => f.detenutoId === detenuto.id);
  console.log(`Fascicoli di ${detenuto.nome} ${detenuto.cognome}:`, fascicoliDetenuto);
}

// === Funzione di riepilogo dell'andamento del carcere ===
function riepilogoCarcere() {
  const numeroGuardie = guardie.length;
  const numeroDetenuti = detenuti.length;
  const evasi = detenuti.filter(d => d.stato === "evaso").length;
  const deceduti = detenuti.filter(d => d.stato === "deceduto").length;

  console.log("=== Riepilogo Carcere di Gotham ===");
  console.log(`Numero guardie: ${numeroGuardie}`);
  console.log(`Numero detenuti totali: ${numeroDetenuti}`);
  console.log(`Detenuti evasi: ${evasi}`);
  console.log(`Detenuti deceduti: ${deceduti}`);
}

// === ESEMPIO DI UTILIZZO ===
assumiGuardia("Jim", "Gordon", 45, "Commissario");
assumiGuardia("Sarah", "Esson", 38, "Tenente");

schedulaDetenuto("Oswald", "Cobblepot", 42, "detenuto");
schedulaDetenuto("Edward", "Nygma", 39, "evaso");
schedulaDetenuto("Harvey", "Dent", 40, "deceduto");

aggiungiFascicolo(1, "2025-01-10", "2026-01-10", "Traffico d’armi");
aggiungiFascicolo(2, "2024-05-12", "2025-05-12", "Omicidio");
aggiungiFascicolo(3, "2023-03-20", "2025-03-20", "Corruzione");

mostraElenchi();
cercaFascicoloPerNome("Oswald");
riepilogoCarcere();
