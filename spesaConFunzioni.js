const listaDellaSpesa = [
    "acqua",
    "olio",
    "linguine",
    "guanciale",
    "uova"
];

//Scrivo l'array in pagina
arrayToDOM("listaSpesa", listaDellaSpesa);

//Aggiunta item alla lista
document.getElementById("addBtn").addEventListener("click", function() {
    //aggiungo all'array il valore dell'input
    const nuovoElemento = document.getElementById("newElement").value;
    listaDellaSpesa.push(nuovoElemento);

    //aggiorno la lista nell'HTML
    arrayToDOM("listaSpesa", listaDellaSpesa);

    //resetto (svuoto) il testo dell'input
    document.getElementById("newElement").value = "";

});

//Rimozione item dalla lista
document.getElementById("deleteBtn").addEventListener("click", function() {

    //elimino un elemento in base al valore dell'input
    const elementoDaEliminare = document.getElementById("newElement").value;
    const posizioneElemento = listaDellaSpesa.indexOf(elementoDaEliminare);
    if(posizioneElemento >= 0) {
        listaDellaSpesa.splice(posizioneElemento, 1);
    }

    //aggiorno la lista nell'HTML
    arrayToDOM("listaSpesa", listaDellaSpesa);
        
    //resetto (svuoto) il testo dell'input
    document.getElementById("newElement").value = "";

});

function arrayToDOM(idContenitore, array) {

    const contenitore = document.getElementById(idContenitore);
    contenitore.innerHTML = ``;

    for(let i = 0; i < array.length; i++) {

        contenitore.innerHTML += `<li>${array[i]}</li>`;
    }

}

/*
function arrayToHTML(array) {
    let html = "";

    for(let i = 0; i < array.length; i++) {
        html += `<li>${array[i]}</li>`;
    }

    return html;
}
*/
