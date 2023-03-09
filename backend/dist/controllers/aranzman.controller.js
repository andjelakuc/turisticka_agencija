"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AranzmanController = void 0;
const server_1 = require("../server");
class AranzmanController {
    constructor() {
        //povratna vrednost je lista aranzmana
        this.dohvatiSveAranzmane = (req, res) => {
            let skip = req.body.skip;
            let limit = req.body.limit;
            server_1.db.collection('Aranzmani').find().skip(skip).limit(limit).toArray(function (err, results) {
                res.send(results);
            });
        };
        this.dohvatiAranzmanePretraga = (req, res) => {
            //obavezno sa frontenda slati lokacije kao niz!
            console.log("pozvan");
            let naziv = req.body.naziv;
            let prevoz = req.body.prevoz;
            let datumPolaska = req.body.datumPolaska;
            let datumPovratka = req.body.datumPovratka;
            let lokacije = req.body.lokacije;
            let skip = req.body.skip;
            let limit = req.body.limit;
            console.log("naziv" + naziv);
            console.log("prevoz" + prevoz);
            console.log("datumPolaska" + datumPolaska);
            console.log("datumPovratka" + datumPovratka);
            console.log("lokacije" + lokacije);
            console.log("skip" + skip);
            console.log("limit" + limit);
            let bezDatumaPolaska = datumPolaska == null ? true : false;
            let bezDatumaPovratkailiPolaska = (datumPolaska == null || datumPovratka == null) ? true : false;
            let bezLokacija = lokacije == null ? true : false;
            if (bezLokacija) {
                server_1.db.collection('Aranzmani').find({ 'naziv': { $regex: '(?i)' + naziv + '(?-i)' },
                    'prevoz': { $regex: '(?i)' + prevoz + '(?-i)' },
                    'datumPolaska': { $regex: '(?i)' + datumPolaska + '(?-i)' },
                    'datumPovratka': { $regex: '(?i)' + datumPovratka + '(?-i)' } }).skip(skip).limit(limit).toArray(function (err, results) {
                    res.send(results);
                });
            }
            else {
                server_1.db.collection('Aranzmani').find({ 'naziv': { $regex: '(?i)' + naziv + '(?-i)' },
                    'prevoz': { $regex: '(?i)' + prevoz + '(?-i)' },
                    'datumPolaska': { $regex: '(?i)' + datumPolaska + '(?-i)' },
                    'datumPovratka': { $regex: '(?i)' + datumPovratka + '(?-i)' },
                    'lokacije': { $in: lokacije } }
                // }
                ).skip(skip).limit(limit).toArray(function (err, results) {
                    res.send(results);
                });
            }
        };
        this.dohvatiVelicinu = (req, res) => {
            server_1.db.collection('Aranzmani').find().count((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dodajAranzman = (req, res) => {
            let tzoffset = (new Date()).getTimezoneOffset() * 60000;
            //let id = req.body.id;
            let naziv = req.body.naziv;
            let lokacije = req.body.lokacije;
            let prevoz = req.body.prevoz;
            let datumPolaska = new Date(req.body.datumPolaska);
            datumPolaska.setDate(datumPolaska.getMilliseconds() - tzoffset);
            let datumPolaskaString = datumPolaska.toISOString().substring(0, 10);
            let datumPovratka = new Date(req.body.datumPovratka);
            datumPovratka.setDate(datumPovratka.getMilliseconds() - tzoffset);
            let datumPovratkaString = datumPovratka.toISOString().substring(0, 10);
            let trajanje = req.body.trajanje;
            let opis = req.body.opis;
            let cena = req.body.cena;
            let smestaj = req.body.smestaj;
            let napomena = req.body.napomena;
            let slika = req.body.slika;
            //provera da li je naziv jedinstven
            server_1.db.collection('Aranzmani').findOne({ 'naziv': naziv }, (err, ar) => {
                if (err)
                    console.log(err);
                else if (ar) {
                    res.json({ 'message': 'Ime nije jedinstveno!' });
                }
                else {
                    server_1.db.collection('Aranzmani').find({}, (err, maxAr) => {
                        if (err)
                            console.log(err);
                        else {
                            let id = 0;
                            if (maxAr != null) {
                                id = maxAr[0].id + 1;
                            }
                            server_1.db.collection('Aranzmani').insertOne({
                                id: id,
                                naziv: naziv,
                                lokacije: lokacije,
                                prevoz: prevoz,
                                datumPolaska: datumPolaskaString,
                                datumPovratka: datumPovratkaString,
                                trajanje: trajanje,
                                opis: opis,
                                cena: cena,
                                smestaj: smestaj,
                                napomena: napomena,
                                slika: slika
                            }, (err, resp) => {
                                if (err)
                                    console.log(err);
                                else if (resp)
                                    res.json({ 'message': 'ok' });
                            });
                        }
                    }).sort({ 'id': -1 }).limit(1);
                }
            });
        };
    }
}
exports.AranzmanController = AranzmanController;
//# sourceMappingURL=aranzman.controller.js.map