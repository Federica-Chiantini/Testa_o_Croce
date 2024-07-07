🇮🇹 ITALIAN: Progetto ideato richiamando il classico gioco del "testa o croce".

📄 HTML: Divisione in 3 sezioni, header, main e footer e un quarto div con all'interno la struttura del messaggio di benvenuto. Struttura del gioco concentrata nel main.

✏️ CSS: Il sito e' realizzato con approccio Mobile First, usando 2 colori principali in contrasto (grigio e verde petrolio), e parte centrale con immagine della moneta e tasti laterali.
Si presenta responsive grazie all'uso di 3 Media Queries a diverse dimensioni (460px, 630px e 765px) che modificano lo stile dell'immagine e dei bottoni in questi breakpoint.
Finestra di popup e posizionata grazie a position absolute e sfondo sottostante con un position fixed, inserito per fare in modo che il gioco sottostante non sia cliccabile. Con misure diverse di z-index sono riuscita a dargli un posizionamento diverso anche in profondita'.
In base alle dinamiche di gioco, alcuni aspetti come i punteggi e il messaggio finale cambiano, cosi come anche l'immagine della moneta in base al numero estratto.
Importante che per gli allineamenti orizzontali ho optato per una soluzione con flexbox che ho trovato piu' veloce e adatta per questa interfaccia.

💻JAVASCRIPT: All'apertura della pagina si apre dopo 1 secondo un popup di benvenuto, grazie ad un setInterval che richiama la funzione che fa apparire questi due elementi che si trovano sopra il gioco(function iniziale()).
Nel frattempo, all'apertura della pagina, viene estratto un numero da 1 a 2, salvanto nella variabile numero, che decide se la faccia della moneta da mostrare sara' testa (1) o croce (2). Utilizzo di Math.floor(Math.random())+1 per estrarre, arrotondare e fare in modo che il numero estratto sia 1 o 2.
Ogni bottone ha un suo evento click che, in base al numero estratto, richiama una delle funzioni che decretano la vittoria o la sconfitta (function Vinto() e function Perso()), cosi come si cambia l'immagine della moneta relativa al numero estratto.
Grazie alle variabili esterne pYou e pCpu vengono aggiunti i punteggi ad ogni caso senza che al riavvio della partita vengano cancellati i punti.
Compare anche un messaggio a schermo con il risultato, e viene anche attivata la function Risultato(), che permette di far comparire il pulsante per iniziare una nuova partita senza far azzerare i punti. Al click sul pulsante rigioca anche l'immagine della moneta tornera' liscia e verra' estrato un nuovo numero.

                  ----------------------------------------------------------------------------------------------------------------------------------------------------------------

🇬🇧 ENGLISH: A project designed to recall the classic game of "heads or tails". 
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
