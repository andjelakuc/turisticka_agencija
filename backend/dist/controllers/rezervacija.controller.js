"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RezervacijaController = void 0;
const rezervacija_1 = __importDefault(require("../models/rezervacija"));
class RezervacijaController {
    constructor() {
        this.dodajRezervaciju = (req, res) => {
            let id = req.body.id;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let telefon = req.body.telefon;
            let email = req.body.email;
            let nacinPlacanja = req.body.nacinPlacanja;
            let brojOdraslih = req.body.brojOdraslih;
            let brojDece = req.body.brojDece;
            let komentar = req.body.komentar;
            let status = req.body.status;
            let data = new rezervacija_1.default({
                id: id,
                ime: ime,
                prezime: prezime,
                telefon: telefon,
                email: email,
                nacinPlacanja: nacinPlacanja,
                brojOdraslih: brojOdraslih,
                brojDece: brojDece,
                komentar: komentar,
                status: status
            });
            data.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.dohvatiSveRezervacije = (req, res) => {
            rezervacija_1.default.find({}, (err, aranzmani) => {
                if (err)
                    console.log(err);
                else
                    res.json(aranzmani);
            });
        };
        this.azurirajRezervaciju = (req, res) => {
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
            rezervacija_1.default.updateOne({ 'id': id }, {
                $set: {
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
                    vremePovratka: vremePovratka
                }
            }, (err, resp) => {
                if (err)
                    console.log(err);
                else if (resp)
                    res.json({ 'message': 'ok' });
            });
        };
    }
}
exports.RezervacijaController = RezervacijaController;
//# sourceMappingURL=rezervacija.controller.js.map