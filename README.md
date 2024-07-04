ITALIAN: Progetto ideato richiamando il classico gioco del "testa o croce".
All'apertura della pagina si apre dopo 1 secondo un popup di benvenuto, effetto realizzato grazie a SetInterval. Sotto di esso un ulteriore elemento HTML (chiamato #sfondo) impedisce all'utente di iniziare il gioco, se prima non clicca nel tasto dentro al popup.
Per riuscire a fare in modo che questo elemento copra tutto il campo da gioco ho assegnato nel CSS le grandezze al 100%, uno z-index inferiore al popup ma superiore a quello della homepage e un position fixed.
Cliccato sul bottone si inizia con il gioco, nel frattempo viene generato un numero da 1 a 2 grazie a Math.floor, che si occupa di far arrotondare il numero, con un + 1 per fare in modo che venga estratto uno di questi due numeri.
Ho creato due eventi per ogni bottone, che richiamano funzioni con nome esterne, che fanno un confronto tra il numero estratto e il numero corrispondente al tasto (1 testa, 2 croce).
Due variabili con il punteggio vengono richiamate e assegnano il punto a chi ha vinto, mostrandolo a schermo. 
Per fare questi confronti ho usato degli if/else statement dove ho inserito le ipotesi di risultato possibili del gioco.
Un messaggio con l'esito della partita compare, con l'aggiunta del bottone per rigiocare senza che vengano cancellati i punteggi.
Premuto questo tasto, si genera un nuovo numero e si puo' iniziare una nuova partita.
Ho fatto in modo che venga anche a cambiarsi l'immagine della moneta in base al numero estratto, usando il setAttribute per cambiare src dell'immagine.
Ho voluto rendere il sito responsive usando grandezze in percentuale e inserendo della MediaQueries in base alla grandezza schermo, il sito e' pensato con l'approccio mobile first e gli affiancamenti orizzontali sono stati realizzati con display: flex.


ENGLISH: A project designed to recall the classic game of "heads or tails". 
When you are opening the page, a welcome popup appears after 1 second, thanks to SetInterval. Below it an additional HTML element (called #sfondo) prevents the user from starting the game, unless they first click on the button inside the popup. 
To be able to make sure that this element covers the entire playing field, I assigned in the CSS the height and the width to 100%, a z-index is lower than the popup but higher than the homepage, adding to it the position fixed.
Clicking on the button, the user can start the game. In the meantime a number from 1 to 2 is generated thanks to Math.floor, which takes care of rounding the number, with a + 1 to make sure that the random number is between 1 and 2.
I created two events for each button, which call external functions; their job si to make a comparison between the drawn number and the number corresponding to the key (1 head, 2 tails).
Two variables with the score are recalled and assigned the point to the winner.
To make these comparisons I used if/else statements where I inserted the possible outcomes of the game.
A message with the result appears in the homepage, with the addition of the button to replay, avoiding that the scores can being deleted.
By pressing this button, a new number is generated and a new game can be started.
I've also manage the change the coin image, according to the drawn number, using the setAttribute to change the src of the image.
The page is responsive, all of the dimensions are in percentage and I have used the MediaQueries to adapt it to different screen sizes. 
The webpage is made using the mobile first approach, and using display: flex for the horizontal alignments.
