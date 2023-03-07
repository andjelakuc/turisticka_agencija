"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const server_1 = require("../server");
class KorisnikController {
    constructor() {
        this.prijavaNaSistem = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            server_1.db.collection('Korisnici').findOne({ 'korisnickoIme': korisnickoIme, 'lozinka': lozinka }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dodajKorisnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            let privilegija = req.body.privilegija;
            server_1.db.collection('Korisnici').findOne({ 'korisnickoIme': korisnickoIme }, (err, resp) => {
                if (err)
                    console.log(err);
                else if (resp) {
                    res.json({ 'message': 'Korisnicko ime je zauzeto.' });
                }
                else {
                    server_1.db.collection('Korisnici').insertOne({
                        korisnickoIme: korisnickoIme,
                        lozinka: lozinka,
                        privilegija: privilegija
                    }, (err, resp) => {
                        if (err)
                            console.log(err);
                        else
                            res.json({ 'message': 'ok' });
                    });
                }
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map