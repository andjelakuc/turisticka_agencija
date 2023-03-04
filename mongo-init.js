db = db.getSiblingDB('turisticka_agencija');

db.createCollection('Aranzmani');
db.createCollection('Smestaji');
db.createCollection('Lokacije');
db.createCollection('Korisnici');

idAranzman = 0;

db.Aranzmani.insertOne(
    {
        id: idAranzman,
        naziv: "Rim novembar 2022",
        lokacije: ["Rim", "Venecija"],
        prevoz: "Autobus",
        // datumPolaska:{
        //     type: Date
        // },
        // datumPovratka: {
        //     type: Date
        // },
        // trajanje:{
        //     type: Number
        // },
        // opis: {
        //     type: String
        // },
        // cena:{
        //     type: Number
        // },
        // smestaj: {
        //     type: Array
        // },
        // napomena:{
        //     type: String
        // }, 
        // slika:{
        //     type: String
        // },
        // vremePolaska:{
        //     type: Date
        // },
        // mestoPolaska:{
        //     type: String
        // },
        // vremePovratka:{
        //     type:String
        // }
    }
);

console.log(db.getMongo());