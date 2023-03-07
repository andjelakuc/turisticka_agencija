"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RezervacijaController = void 0;
const server_1 = require("../server");
class RezervacijaController {
    constructor() {
        this.dodajRezervaciju = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let telefon = req.body.telefon;
            let email = req.body.email;
            let nacinPlacanja = req.body.nacinPlacanja;
            let brojOdraslih = req.body.brojOdraslih;
            let brojDece = req.body.brojDece;
            let komentar = req.body.komentar;
            let status = req.body.status;
            server_1.db.collection('Rezervacije').find({}, (err, maxRez) => {
                if (err)
                    console.log(err);
                else {
                    let id = 0;
                    if (maxRez != null) {
                        id = maxRez[0].id + 1;
                    }
                    server_1.db.collection('Rezervacije').insertOne({
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
                    }, (err, resp) => {
                        if (err)
                            console.log(err);
                        else if (resp)
                            res.json({ 'message': 'ok' });
                    });
                }
            }).sort({ 'id': -1 }).limit(1);
        };
        this.dohvatiSveRezervacije = (req, res) => {
            server_1.db.collection('Rezervacije').find({}, (err, rezervacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(rezervacije);
            });
        };
        this.azurirajRezervaciju = (req, res) => {
            let id = req.body.id;
            let status = req.body.status;
            server_1.db.collection('Rezervacije').updateOne({ 'id': id }, {
                $set: {
                    status: status
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