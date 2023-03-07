"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AranzmanController = void 0;
const server_1 = require("../server");
const aranzman_1 = __importDefault(require("../models/aranzman"));
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
        this.dohvatiVelicinu = (req, res) => {
            server_1.db.collection('Aranzmani').count((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dodajAranzman = (req, res) => {
            let id = req.body.id;
            let naziv = req.body.naziv;
            let lokacije = req.body.lokacije;
            let prevoz = req.body.prevoz;
            let datumPolaska = req.body.datumPolaska;
            let datumPovratka = req.body.datumPovratka;
            let trajanje = req.body.trajanje;
            let opis = req.body.opis;
            let cena = req.body.cena;
            let smestaj = req.body.smestaj;
            let napomena = req.body.napomena;
            let slika = req.body.slika;
            let vremePolaska = req.body.vremePolaska;
            let mestoPolaska = req.body.mestoPolaska;
            let vremePovratka = req.body.vremePovratka;
            let data = new aranzman_1.default({
                id: id,
                naziv: naziv,
                lokacije: lokacije,
                prevoz: prevoz,
                datumPolaska: datumPolaska,
                datumPovratka: datumPovratka,
                trajanje: trajanje,
                opis: opis,
                cena: cena,
                smestaj: smestaj,
                napomena: napomena,
                slika: slika,
                vremePolaska: vremePolaska,
                mestoPolaska: mestoPolaska,
                vremePovratka: vremePovratka,
            });
            data.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
    }
}
exports.AranzmanController = AranzmanController;
//# sourceMappingURL=aranzman.controller.js.map