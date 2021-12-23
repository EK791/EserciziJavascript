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
var totOre = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);

for (i = 0; i < dipendenti.length; i++) {
    for (m = 0; m < presenze.length; m++) {
        if (presenze[m].idDipendente == i) {
            totOre[i] = totOre[i] + presenze[m].orelav
        }
    }
}
console.log(totOre)

var costoTotale = []

for (i = 0; i < dipendenti.length; i++) {
    costoTotale[i] = totOre[i] * dipendenti[i].costoOrario
    console.log("Il costo totale per il dipendente " + i + " è : " + costoTotale[i])
}

var costoCategoria = [0, 0, 0]

for (i = 0; i < dipendenti.length; i++){
    if (dipendenti[i].categoria=="I"){
        costoCategoria[0]= costoCategoria[0]+costoTotale[i]
    }else if (dipendenti[i].categoria=="T"){
        costoCategoria[1]= costoCategoria[1]+costoTotale[i]
    }else if (dipendenti[i].categoria=="D"){
        costoCategoria[2]= costoCategoria[2]+costoTotale[i]
    }
}

console.log(costoCategoria)






