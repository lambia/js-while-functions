function benvenuto() {
    console.log("Benvenuto");
}

function arrivederci() {
    console.log("Arrivederci");
}

// benvenuto();
// arrivederci();


/******** ESEMPIO DI PRIMA CON UNA SOLA FUNZIONE PARAMETRIZZATA ********/

function saluta(messaggio) {
    console.log(messaggio);
}

// saluta();

// saluta("Benvenuto");
// saluta( 21*2 );
// saluta("Arrivederci");

// const nomeutente = "Luca";
// saluta(nomeutente);

/******** ESEMPIO CON RETURN *****************/
function somma(a, b) {
    // const risultato = a + b;
    return (a+b);
}


// let x = somma(2, 3);
// let y = somma(40, 2);

// console.log("X: ", x);
// console.log("Y: ", y);
// console.log( somma(x, y) );


/************* ESEMPIO PARI/DISPARI ************/

function pariOrDispari(numero) {
    let risultato;

    if(numero % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato;
}

// const numero = parseInt( prompt("Inserisci un numero") );
// let risultato = pariOrDispari(numero);
// console.log("Il tuo numero è " + risultato);

/*************** ESEMPIO RANDOM NUMBER ***********/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getDieciNumeri() {

    let numeri = [];
    for(let i=0; i<10; i++) {
        const numero = getRndInteger(1, 100);
        numeri.push( numero );
    }
    return numeri;

}

// let iMieiNumeri = getDieciNumeri();
// console.log("Numeri generati: ", iMieiNumeri );