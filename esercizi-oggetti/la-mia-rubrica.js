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


class Contatto {
    constructor(nome, cognome, telefono, email) {
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
        this.email = email;
    }
}

class Rubrica {
    constructor() {
        this.contatti = [];
    }

    mostraTutti() {
        if (this.contatti.length === 0) {
            console.log("La rubrica è vuota.");
        } else {
            console.log("Lista contatti:");
            this.contatti.forEach((c, i) => {
                console.log(`${i + 1}. ${c.nome} ${c.cognome} - Tel: ${c.telefono}, Email: ${c.email}`);
            });
        }
    }

    aggiungiContatto(nuovoContatto) {
        this.contatti.push(nuovoContatto);
        console.log(`Contatto aggiunto: ${nuovoContatto.nome} ${nuovoContatto.cognome}`);
    }

    modifica(nome, nuovoNome, nuovoCognome, nuovoTelefono, nuovaEmail) {
        const indice = this.contatti.findIndex(c => c.nome === nome);
        if (indice !== -1) {
            const contatto = this.contatti[indice];
            contatto.nome = nuovoNome;
            contatto.cognome = nuovoCognome;
            contatto.telefono = nuovoTelefono;
            contatto.email = nuovaEmail;
            console.log(`Contatto ${nome} modificato.`);
        } else {
            console.log(`Contatto ${nome} non trovato.`);
        }   
    }

    cancella(nome) {
        const indice = this.contatti.findIndex(c => c.nome === nome);   
        if (indice !== -1) {
            this.contatti.splice(indice, 1);
            console.log(`Contatto ${nome} cancellato.`);
        } else {
            console.log(`Contatto ${nome} non trovato.`);
        }   
    }

    cerca(nome) {
        const contatto = this.contatti.find(c => c.nome === nome);  
        if (contatto) {
            console.log("Contatto trovato:", contatto);
            return contatto;
        } else {
            console.log(`Contatto ${nome} non trovato.`);
            return null;
        }       
    }
}

  http://www.imparareaprogrammare.it
*/

