var presenze = [
    { "anno": 2021, "numGiorno": 1, "idDipendente": 0, "orelav": 5 },
    { "anno": 2021, "numGiorno": 2, "idDipendente": 1, "orelav": 8 },
    { "anno": 2021, "numGiorno": 3, "idDipendente": 3, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 2, "orelav": 7 },
    { "anno": 2021, "numGiorno": 1, "idDipendente": 1, "orelav": 5 },
    { "anno": 2021, "numGiorno": 7, "idDipendente": 1, "orelav": 8 },
    { "anno": 2021, "numGiorno": 10, "idDipendente": 3, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 1, "orelav": 7 },
    { "anno": 2021, "numGiorno": 6, "idDipendente": 2, "orelav": 5 },
    { "anno": 2021, "numGiorno": 2, "idDipendente": 3, "orelav": 8 },
    { "anno": 2021, "numGiorno": 3, "idDipendente": 0, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 0, "orelav": 7 },
    { "anno": 2021, "numGiorno": 1, "idDipendente": 2, "orelav": 5 },
    { "anno": 2021, "numGiorno": 7, "idDipendente": 1, "orelav": 8 },
    { "anno": 2021, "numGiorno": 10, "idDipendente": 3, "orelav": 1 },
    { "anno": 2021, "numGiorno": 20, "idDipendente": 3, "orelav": 7 }
]

var dipendenti = [
    { "nome": "Franco", "cognome": "Rossi", "id": 0, "costoOrario": 7, "categoria": "I" },
    { "nome": "Giovanni", "cognome": "Verdi", "id": 1, "costoOrario": 8, "categoria": "I" },
    { "nome": "Filippo", "cognome": "Bianchi", "id": 3, "costoOrario": 9, "categoria": "D" },
]
var totOre = new Array(0,0,0);
console.log(totOre)

for (i = 0; i < dipendenti.length; i++) {
    for (m = 0; m < presenze.length; m++) {
        if (presenze[m].idDipendente == i) {
            totOre[i] = totOre[i] + presenze[m].orelav
        }
    }
}
console.log(totOre)

var costoTotale = [0, 0, 0]

for (i = 0; i < dipendenti.length; i++) {
    costoTotale[i] = totOre[i] * dipendenti[i].costoOrario
    console.log("Il costo totale per il dipendente " + i + " è : " + costoTotale[i])
}




