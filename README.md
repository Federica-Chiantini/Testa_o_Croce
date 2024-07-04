Progetto ideato richiamando il classico gioco del "testa o croce".
All'apertura della pagina si apre dopo 1 secondo un popup di benvenuto, effetto realizzato grazie a SetInterval. Sotto di esso un ulteriore elemento HTML (chiamato #sfondo) impedisce all'utente di iniziare il gioco, se prima non clicca nel tasto dentro al popup.
Per riuscire a fare in modo che questo elemento copra tutto il campo da gioco ho assegnato nel CSS le grandezze al 100%, uno z-index inferiore al popup ma superiore a quello della homepage e un position fixed.
Cliccato sul bottone si inizia con il gioco, nel frattempo viene generato un numero da 1 a 2 grazie a Math.floor, che si occupa di far arrotondare il numero, con un + 1 per fare in modo che venga estratto uno di questi due numeri.
Ho creato due eventi per ogni bottone, che richiamano funzioni con nome esterne, che fanno un confronto tra il numero estratto e il numero corrispondente al tasto (1 testa, 2 croce).
Due variabili con il punteggio vengono richiamate e assegnano il punto a chi ha vinto, mostrandolo a schermo. 
Per fare questi confronti ho usato degli if/else statement dove ho inserito le ipotesi di risultato possibili del gioco.
Un messaggio con l'esito della partita compare, con l'aggiunta del bottone per rigiocare senza che vengano cancellati i punteggi.
Premuto questo tasto, si genera un nuovo numero e si puo' iniziare una nuova partita.
Ho fatto in modo che venga anche a cambiarsi l'immagine della moneta in base al tasto selezionato, usando il setAttribute per cambiare src dell'immagine.
Ho voluto rendere il sito responsive usando grandezze in percentuale e inserendo della MediaQueries in base alla grandezza schermo, il sito e' pensato con l'approccio mobile first e gli affiancamenti orizzontali sono stati realizzati con display: flex.
