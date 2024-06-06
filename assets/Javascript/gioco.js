setTimeout(iniziale, 1000); 

function iniziale() { //messaggio a schermo
    let sfondo = document.getElementById("sfondo"); 
    sfondo.style.display = "block";
    document.getElementById("start").onclick = function () { //bottone "start"
        sfondo.style.display = "none";
    }
}

let immagine = document.querySelector("img");
let bottoni = document.querySelector(".bottoni");
let risposta = document.getElementById("risposta");
let rigiocaDiv = document.getElementById("rigiocadiv");

numero = Math.floor(Math.random() * 2) + 1; 

//variabili per tenere il conteggio
let pYou = 0;
let pCpu = 0;

//-funzioni con risultati-
function vinto() {
    risposta.innerHTML = "Hai Vinto!";
    pYou++;
    document.getElementById("puntiYou").innerHTML = pYou;
    risultato();
}
function perso() {
    risposta.innerHTML = "Hai Perso!"
    pCpu++;
    document.querySelector("#puntiCpu").innerHTML = pCpu;
    risultato();
}
function risultato() {
    bottoni.style.display = "none" //bottoni "testa" e "croce" scompaiono
    rigiocaDiv.style.display = "block"; //appare risultato e botton per rigiocare
}//--

//click bottone testa
bottoneTesta.addEventListener("click", function () { 
    if (numero == 1) { //vittoria
        immagine.setAttribute("src", "assets/immagini/testa-removebg-preview.png"); 
        vinto();
    }
    else {  //sconfitta
        immagine.setAttribute("src", "assets/immagini/croce-removebg-preview.png"); 
        perso();
    }
})

//click bottone croce
bottoneCroce.addEventListener("click", function () {
    if (numero == 2) { //vittoria
        immagine.setAttribute("src", "assets/immagini/croce-removebg-preview.png"); 
        vinto();
    }
    else {   //sconfitta
        immagine.setAttribute("src", "assets/immagini/testa-removebg-preview.png");
        perso();
    }
})

//click su bottone rigioca per ricaricare la pagina
rigioca.addEventListener("click", function () {
    immagine.setAttribute("src", "assets/immagini/moneta-removebg-preview.png"); 
    rigiocaDiv.style.display = "none";
    bottoni.style.display = "block";
    numero = Math.floor(Math.random() * 2) + 1; //viene estratto un nuovo numero per nuova partita
})