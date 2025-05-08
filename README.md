Milestone 1

Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).

Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.

Se tutto funziona, passiamo alla prossima milestone

Milestone 2

Per iniziare, creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller.

Ora passiamo ad implementare le logiche delle nostre CRUD:

- Index dovrà restituire la lista dei post in formato JSON

- Show dovrà restituire un singolo post in formato JSON

- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

Bonus

- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag

- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.



Prendiamo le API precedentemente create per il vostro blog ed aggiungiamo la persistenza tramite la connessione a un DB
Milestone 1
- Importiamo il db in allegato su MySQL Workbench
- Installiamo il client *mysql2* con npm i mysql2 nell’app Express
- Creiamo un file di configurazione per connettere il database
- Inseriamo un console.log nella logica di connessione e proviamo ad avviare l’applicazione per verificare che non ci siano errori.


Milestone 2
- Facciamo sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON
- Verifichiamo su Postman che la risposta sia corretta


Milestone 3
- Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database
- Verifichiamo su Postman che la chiamata non dia errore e risponda 204
- Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso


Milestone 4
- Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON
- Verifichiamo su Postman che la risposta sia corretta