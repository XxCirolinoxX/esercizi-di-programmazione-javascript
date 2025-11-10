/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/


Function contatti(nome,cognome,telefono,email){return{nome:nome,
                                                      cognome:cognome,
                                                      telefono:telefono,
                                                      email:email};}
const Rubrica = {contatti[],
                  mostraTutti: function () {
    console.log("----- RUBRICA -----");
    this.contatti.forEach((contatto, index) => {
      console.log(index + ")", contatto.nome, "-", contatto.telefono, "-", contatto.email);
    });
  },
                 aggiungiContatto: function (contatto) {
    this.contatti.push(contatto);
    console.log(`Contatto "${contatto.nome}" aggiunto correttamente!`);
                   cercaContatto: function (nome) {
    return this.contatti.find(contatto => contatto.nome === nome);
  },
                 modificaContatto: function (nome, nuovoNome, nuovoTelefono, nuovaEmail) {
    const index = this.contatti.findIndex(contatto => contatto.nome === nome);

    if (index === -1) {
      console.log(` Contatto "${nome}" non trovato.`);
      return;
      this.contatti[index] = Contatto(nuovoNome, nuovoTelefono, nuovaEmail);
    console.log(` Contatto "${nome}" aggiornato!`);
  },
                 cancellaContatto: function (nome) {
    const index = this.contatti.findIndex(contatto => contatto.nome === nome);

    if (index === -1) {
      console.log(` Contatto "${nome}" non trovato.`);
      return;
    }

    this.contatti.splice(index, 1);
    console.log(` Contatto "${nome}" cancellato!`);
  }
};
