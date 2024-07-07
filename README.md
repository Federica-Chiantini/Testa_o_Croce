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

       ------------------------------------------------------------------------------------------------------

🇬🇧 ENGLISH: A project designed to recall the classic game of "heads or tails".

📄 HTML: The game is divided into 3 sections, header, main and footer. A fourth element, a div tag, there is a popup message. All the main function of the game is inside the main section.

✏️ CSS: The webpage is made with the idea of Mobile first approach, using 2 main contrasting colors (gray and petrol green), and positioning the main image at the center of the page, above the two buttons.
It is a responsive design page, thanks to the use of 3 Media Queries at different breakpoints (460px, 630px and 765px) to fix the style of the image and the buttons.
A Popup window is positioned with absolute position on top of the play area, with a background underneath (with fixed position), that is covering the playfield, making it not clickable. The z-index property has the job to decide the order of these elements.
During the game few aspects of the play area can games, as the coin face, the score, ect. 
The horizontal alignments are made with the flexbox layout method.

💻JAVASCRIPT: When you are opening the page, a welcome popup opens after 1 second, thanks to a setInterval that calls the function that brings up these two elements (function iniziale()).
Meanwhile, when the page is opened, a number from 1 to 2 is drawn, saved in the a variable (number), which decides whether the face of the coin to be shown will be heads (1) or tails (2). Math.floor(Math.random())+1 is using to extract and round the drawn number.
Each button has its own click event which, depending on the number drawn, calls one of the functions that decree victory or defeat (funtion Vinto() and function Perso()), as well as changing the image of the coin relative to the drawn number.
The variables pYou and pCpu are made to keep the score without the points being deleted when the game is restarted, because they are declared external to any function.
A message also appears on the screen with the result, and the Risultato() function is also activated, which allows the button to appear to start a new game without resetting the points. When you click on the rigioca button, the image of the coin will also become smooth and a new number will be drawn.
