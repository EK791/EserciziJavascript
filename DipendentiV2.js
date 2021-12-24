console.log("")
console.log("Questa è la versione 2!")

var presenze = [
    { "anno": 2021, "numGiorno": 1, "idDipendente": 0, "orelav": 8 },
    { "anno": 2021, "numGiorno": 2, "idDipendente": 1, "orelav": 8 },
    { "anno": 2021, "numGiorno": 3, "idDipendente": 3, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 2, "orelav": 7 },
    { "anno": 2021, "numGiorno": 1, "idDipendente": 1, "orelav": 5 },
    { "anno": 2021, "numGiorno": 7, "idDipendente": 2, "orelav": 8 },
    { "anno": 2021, "numGiorno": 10, "idDipendente": 3, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 4, "orelav": 7 },
    { "anno": 2021, "numGiorno": 6, "idDipendente": 5, "orelav": 5 },
    { "anno": 2021, "numGiorno": 2, "idDipendente": 4, "orelav": 8 },
    { "anno": 2021, "numGiorno": 3, "idDipendente": 5, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 7, "orelav": 7 },
    { "anno": 2021, "numGiorno": 1, "idDipendente": 6, "orelav": 5 },
    { "anno": 2021, "numGiorno": 7, "idDipendente": 7, "orelav": 8 },
    { "anno": 2021, "numGiorno": 10, "idDipendente": 6, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 8, "orelav": 7 }
]

var dipendenti = [
    { "nome": "Franco", "cognome": "Rossi", "id": 0, "costoOrario": 7, "categoria": "I" },
    { "nome": "Giovanni", "cognome": "Verdi", "id": 1, "costoOrario": 8, "categoria": "T" },
    { "nome": "Filippo", "cognome": "Bianchi", "id": 2, "costoOrario": 9, "categoria": "D" },
    { "nome": "Kevin", "cognome": "Gialli", "id": 3, "costoOrario": 5, "categoria": "T" },
    { "nome": "Samuele", "cognome": "Blu", "id": 4, "costoOrario": 11, "categoria": "D" },
    { "nome": "Massimo", "cognome": "Green", "id": 5, "costoOrario": 25, "categoria": "I" },
    { "nome": "Loris", "cognome": "Neri", "id": 6, "costoOrario": 5, "categoria": "D" },
    { "nome": "Sergio", "cognome": "Grigi", "id": 7, "costoOrario": 8, "categoria": "I" },
    { "nome": "Ivan", "cognome": "Marroni", "id": 8, "costoOrario": 9, "categoria": "T" },
]

function copia(dipendenti) {
    return JSON.parse(JSON.stringify(dipendenti));
}
var nuovojson = copia(dipendenti);

for (m = 0; m < dipendenti.length; m++) {
    nuovojson.map(i => i.oreTotLavorate = 0);
    nuovojson.map(i => i.costoDipendente = 0);
}

console.log("Questo è il nuovo JSON con aggiunto costoDipendente e Ore totali lavorate")
console.log(nuovojson)

for (i = 0; i < presenze.length; i++) {
    for (m = 0; m < dipendenti.length; m++) {
        if (presenze[i].idDipendente == dipendenti[m].id) {
            nuovojson[m].oreTotLavorate = nuovojson[m].oreTotLavorate + presenze[i].orelav
        }
    }
}
console.log("Totale ore lavorate dai dipendenti:")
console.log(nuovojson)

for (i = 0; i < dipendenti.length; i++) {
        nuovojson[i].costoDipendente = nuovojson[i].oreTotLavorate * nuovojson[i].costoOrario
        console.log("Il costo totale per il dipendente " + i + " è : " + nuovojson[i].costoDipendente)
}

var prova = {categoriaI: 0, categoriaT: 0, categoriaD: 0}

for (i = 0; i < dipendenti.length; i++){
    if (dipendenti[i].categoria=="I"){
        prova.categoriaD= prova.categoriaD+costoTotale[i]
    }else if (dipendenti[i].categoria=="T"){
        prova.categoriaI= prova.categoriaI+costoTotale[i]
    }else if (dipendenti[i].categoria=="D"){
        prova.categoriaT= prova.categoriaT+costoTotale[i]
    }
}

console.log("")
console.log("Il costo totale per la categoria I è: "+prova.categoriaI)
console.log("Il costo totale per la categoria D è: "+prova.categoriaD)
console.log("Il costo totale per la categoria T è: "+prova.categoriaT)


