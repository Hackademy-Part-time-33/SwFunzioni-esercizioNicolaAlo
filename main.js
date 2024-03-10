
// GIOCO DEI DADI
/*

let player1 = prompt(`Giocatore 1: Inserisci il tuo Nome`);
let player2 = prompt(`Giocatore 2: Inserisci il tuo Nome`);
let scorep1 = 0;
let scorep2 = 0;
let rollsmatch1 = parseInt(prompt(`Quanti tiri volete effettuare?`))

function dicegame(rolls, firstplayer, secondplayer, firstscore, secondscore) {

    while (isNaN(rolls)) {
        rolls = prompt("Per favore, inserisci un numero:");
    }

    for ( let i=1; i<=rolls; i++) {
        firstscore = firstscore + Math.floor(Math.random() * (7-1) + 1);
        secondscore = secondscore + Math.floor(Math.random() * (7-1) + 1);
    }

    if (firstscore>secondscore) {
        return alert(`${firstplayer} ha vinto totalizzando ${firstscore}, mi dispiace ${secondplayer} hai totalizzato solo ${secondscore}`);
    
    }
    
    else if (firstscore<secondscore) {
        return alert(`${secondplayer} ha vinto totalizzando ${secondscore}, mi dispiace ${firstplayer} hai totalizzato solo ${firstscore}`);
    
    }
    
    else if (firstscore==secondscore) {
        return alert(`${secondplayer} ha totalizzato ${secondscore}, e ${firstplayer} ha totalizzato ${firstscore} : PAREGGIO`);
    
    }
}


dicegame(rollsmatch1, player1, player2, scorep1, scorep2);

*/

/* TRACCIA 2 Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
N dovra’ rappresentare il parametro formale della funzione
tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'*/

/*
let selectnumber = parseInt(prompt(`Fino a che numero vuoi arrivarre?`));
    while (isNaN(selectnumber)) {
        selectnumber = prompt("Per favore, inserisci un numero:");
    }

    function conversione(N) {
        for (let i=1; i<=N; i++) {

            if (i%15===0) {
                  console.log('FizzBuzz');
                 }

            else if (i%3===0) {
                  console.log('Fizz');
                }
            
            else if (i%5===0) {
                  console.log('Buzz');
                }

            else {
                 console.log(i)
            }

            }
        }

    conversione(selectnumber);

*/

/* Traccia 3:
Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
Esempio:
Input : 9 → output: 1 cifra
Input : 99 → output: 2 cifre
Input: 12000 → output: Numero troppo grande */

/*
let selectn = parseInt(prompt(`scegli un numero`));
let numstring = selectn.toString().length

function countnumber(sn) {
    while (isNaN(sn)) {
        sn = prompt("Per favore, inserisci un numero:");
    }

    if (sn<=9999) {
        return alert(`il numero è composto da ${numstring} cifre`);
    
    }

    else {
        return alert(`il numero è troppo grande`)
    }

    
}

countnumber(selectn);
*/

/*Traccia 4:
Scrivere una funzione che simuli un distributore di bevande:
fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza (modificato)
Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!

P.S. Provate poi a riscrivere le funzioni, degli esercizi precedenti, utilizzando la sintassi dell'Arrow function!*/

/*

let drink = prompt(`Inserisci il numero corrispondente alla bevanda: 1 per acqua, 2 per coca cola, 3 per birra`);

function distributor(drinkitem) {

    while (true) {
        if (drinkitem == 1) {
            alert(`E' stata selezionata l'acqua`);
            alert(`1,2,3 EROGAZIONE IN CORSO`);
            break;
        } 
        else if (drinkitem == 2) {
            let tipococa = prompt(`Che coca vuoi? 4 normale, 5 light`);
                if (tipococa == 4) {
                alert(`Non berne tanta, ci sono troppi zuccheri!`);
                alert(`1,2,3 EROGAZIONE IN CORSO`);
                break;
                }

                else if (tipococa == 5) {
                alert(`bravo! ci tieni alla linea`);
                alert(`1,2,3 EROGAZIONE IN CORSO`);
                break;
                }
                else {
                    alert(`NUMERO ERRATO`);
                }
        } else if (drinkitem == 3) {
            alert(`E' stata selezionata birra`);
            alert(`1,2,3 EROGAZIONE IN CORSO`);
            break;

        } else {
            drinkitem = prompt(`Numero non valido. Inserisci il numero corrispondente alla bevanda: 1 per acqua, 2 per coca cola, 3 per birra`);
        }
    }
}

distributor(drink);

*/

/*che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:

Esempio:
  
let numbers = [3, 5, 10, 2, 8];
Output: media = 5.6, valori minori = [3, 5, 2]

Variante:
Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.
*/

let numbers = [3, 5, 10, 2, 8];
let sum = numbers.reduce((acc, el) => acc + el, 0)
console.log(sum);
let media = sum / numbers.length
console.log(media);
let valmin = numbers.filter(el => el < media);
console.log(valmin);
let valmax =numbers.filter(el => el > media);
console.log(valmax);