db = db.getSiblingDB('turisticka_agencija');

db.createCollection('Aranzmani');
db.createCollection('Smestaji');
db.createCollection('Lokacije');
db.createCollection('Korisnici');

prevoz = ['Autobus', 'Avion', 'Krstarenje', 'Voz', 'Samostalni prevoz'];

idAranzman = 0;

lokacije =
    [
        {
            naziv: "Kušadasi",
            drzava: "Turska",
            kontinent: "Azija",
            fotografija: "../assets/kusadasi.png"
        },
        {
            naziv: "Lefkada",
            drzava: "Grčka",
            kontinent: "Evropa",
            fotografija: "../assets/lefkada.jpg" 
        },
        {
            naziv: "Marmaris",
            drzava: "Turska",
            kontinent: "Azija",
            fotografija: "../assets/marmaris.jpg"
        },{
            naziv: "Krf",
            drzava: "Grčka",
            kontinent: "Evropa",
            fotografija: "../assets/krf.jpeg"
        },{
            naziv: "Zakintos",
            drzava: "Grčka",
            kontinent: "Evropa",
            fotografija: "../assets/zakintos.jpeg"
        },{
            naziv: "Budva",
            drzava: "Crna Gora",
            kontinent: "Evropa",
            fotografija: "../assets/budva.jpg"
        },{
            naziv: "Kazablanka",
            drzava: "Maroko",
            kontinent: "Afrika",
            fotografija: "../assets/kazablanka.jpg"
        },{
            naziv: "Bali",
            drzava: "Indonezija",
            kontinent: "Azija",
            fotografija: "../assets/bali.jpg"
        },{
            naziv: "Ohrid",
            drzava: "Severna Makedonija",
            kontinent: "Evropa",
            fotografija: "../assets/ohrid.jpg"
        },{
            naziv: "Istanbul",
            drzava: "Turska",
            kontinent: "Azija",
            fotografija: "../assets/istanbul.jpg"
        },{
            naziv: "Rim",
            drzava: "Italija",
            kontinent: "Evropa",
            fotografija: "../assets/rim.jpg"
        },{
            naziv: "Venecija",
            drzava: "Italija",
            kontinent: "Evropa",
            fotografija: "../assets/venecija.jpg"
        },{
            naziv: "Madrid",
            drzava: "Španija",
            kontinent: "Evropa",
            fotografija: "../assets/madrid.jpg"
        },{
            naziv: "Barselona",
            drzava: "Španija",
            kontinent: "Evropa",
            fotografija: "../assets/barselona.jpg"
        },{
            naziv: "Nica",
            drzava: "Francuska",
            kontinent: "Evropa",
            fotografija: "../assets/nica.jpg"
        },{
            naziv: "Lisabon",
            drzava: "Portugal",
            kontinent: "Evropa",
            fotografija: "../assets/lisabon.jpg"
        },{
            naziv: "Monte Karlo",
            drzava: "Monako",
            kontinent: "Evropa",
            fotografija: "../assets/montekarlo.jpg"
        },{
            naziv: "Amsterdam",
            drzava: "Holandija",
            kontinent: "Evropa",
            fotografija: "../assets/amsterdam.jpg"
        },{
            naziv: "Beč",
            drzava: "Austrija",
            kontinent: "Evropa",
            fotografija: "../assets/bec.jpg"
        },{
            naziv: "Berlin",
            drzava: "Nemačka",
            kontinent: "Evropa",
            fotografija: "../assets/berlin.jpg"
        },{
            naziv: "Prag",
            drzava: "Češka",
            kontinent: "Evropa",
            fotografija: "../assets/prag.jpg"
        },{
            naziv: "Budimpešta",
            drzava: "Mađarska",
            kontinent: "Evropa",
            fotografija: "../assets/budimpesta.jpeg"
        },{
            naziv: "Dubai",
            drzava: "Ujedinjeni Arapski Emirati",
            kontinent: "Azija",
            fotografija: "../assets/dubai.jpg"
        },{
            naziv: "Hurgada",
            drzava: "Egipat",
            kontinent: "Afrika",
            fotografija: "../assets/hurgada.jpg"
        },{
            naziv: "Kairo",
            drzava: "Egipat",
            kontinent: "Evropa",
            fotografija: "../assets/kairo.jpg"
        },{
            naziv: "New York",
            drzava: "Ujedinjene Američke Države",
            kontinent: "Severna Amerika",
            fotografija: "../assets/newyork.jpg"
        },{
            naziv: "Bangkok",
            drzava: "Tajland",
            kontinent: "Azija",
            fotografija: "../assets/bangkok.jpeg"
        },{
            naziv: "Maldivi",
            drzava: "Maldivi",
            kontinent: "Azija",
            fotografija: "../assets/maldivi.jpg"
        },{
            naziv: "Šri Lanka",
            drzava: "Šri Lanka",
            kontinent: "Azija",
            fotografija: "../assets/srilanka.jpeg"
        },{
            naziv: "Majami",
            drzava: "Ujedinjene Američke Države",
            kontinent: "Severna Amerika",
            fotografija: "../assets/majami.jpg"
        },{
            naziv: "Meksiko",
            drzava: "Meksiko",
            kontinent: "Severna Amerika",
            fotografija: "../assets/meksiko.jpg"
        },{
            naziv: "Kuba",
            drzava: "Kuba",
            kontinent: "Severna Amerika",
            fotografija: "../assets/kuba.jpg"
        },{
            naziv: "Maču Pikču",
            drzava: "Peru",
            kontinent: "Južna Amerika",
            fotografija: "../assets/macupikcu.jpeg"
        },{
            naziv: "Buenos Ajres",
            drzava: "Argentina",
            kontinent: "Južna Amerika",
            fotografija: "../assets/buenosajres.jpg"
        },{
            naziv: "Rio de Žaneiro",
            drzava: "Brazil",
            kontinent: "Južna Amerika",
            fotografija: "../assets/rio.jpg"
        },{
            naziv: "Sao Paulo",
            drzava: "Brazil",
            kontinent: "Južna Amerika",
            fotografija: "../assets/saopaolo.jpg"
        },{
            naziv: "Melburn",
            drzava: "Australija",
            kontinent: "Australija sa okeanijom",
            fotografija: "../assets/melburn.jpg"
        },{
            naziv: "Sidnej",
            drzava: "Australija",
            kontinent: "Australija sa Okeanijom",
            fotografija: "../assets/sidnej.jpg"
        },{
            naziv: "Kanbera",
            drzava: "Australija",
            kontinent: "Austarlija sa okeanijom",
            fotografija: "../assets/kanbera.jpg"
        },{
            naziv: "Bogota",
            drzava: "Kolumbija",
            kontinent: "Južna Amerika",
            fotografija: "../assets/bogota.jpg"
        },{
            naziv: "Santijago",
            drzava: "Čile",
            kontinent: "Južna Amerika",
            fotografija: "../assets/santijago.jpg"
        },{
            naziv: "Toronto",
            drzava: "Kanada",
            kontinent: "Severna Amerika",
            fotografija: "../assets/toronto.png"
        },{
            naziv: "Vankuver",
            drzava: "Kanada",
            kontinent: "Severna Amerika",
            fotografija: "../assets/vankuver.jpg"
        },{
            naziv: "Kapadokija",
            drzava: "Turska",
            kontinent: "Azija",
            fotografija: "../assets/kapadokija.jpg"
        },{
            naziv: "Halkidiki",
            drzava: "Grcka",
            kontinent: "Evropa",
            fotografija: "../assets/halkidiki.jpg"
        }
    ];

lokacije.forEach(lokacija => {
    db.Lokacije.insertOne(
        {
            naziv: lokacija.naziv,
            drzava: lokacija.drzava,
            kontinent: lokacija.kontinent,
            fotografija: lokacija.fotografija
        }
    )
});


lokacije.forEach(lokacija => {
    db.Smestaji.insertOne(
        {
            id: 0,
            ime: "proba smestaj",
            tip: "1/4",
            kategorija: 5,
            internet: true,
            tv: false,
            ac: true,
            frizider: true,
            sef: false,
            fotografije: []
        }
    )
});

function generateRandom(maxLimit){
    let rand = Math.random() * maxLimit;
  
    rand = Math.floor(rand);
  
    return rand;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

for (let index = 0; index < 10000; index++) {
    locationIndex = generateRandom(lokacije.length);
    prevozIndex = generateRandom(prevoz.length);
    lokacija = lokacije[locationIndex];
    smestajIndex = locationIndex;
    naziv = lokacija.naziv + index;
    polazakDatum = randomDate(new Date(), new Date(2024,12,31));
    trajanje = generateRandom(9) + 3;
    cena = (10 + generateRandom(300))*10;
    povratakDatum = new Date();
    povratakDatum.setDate(polazakDatum.getDate() + trajanje);
    db.Aranzmani.insertOne(
        {
            id: index,
            naziv: naziv,
            lokacije: [locationIndex],
            prevoz: prevoz[prevozIndex],
            datumPolaska: polazakDatum,
            datumPovratka: povratakDatum,
            trajanje: trajanje,
            opis: "Treba da bude Array tipa!",
            cena:cena,
            smestaj: [smestajIndex],
            napomena: "...", 
            slika: lokacija.fotografija,
            vremePolaska: polazakDatum,
            mestoPolaska: "Beograd",
            vremePovratka: "vecernjim"
        }
    );
    
}

console.log(db.getMongo());