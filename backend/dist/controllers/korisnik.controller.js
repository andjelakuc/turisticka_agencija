"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijavaNaSistem = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoIme, 'lozinka': lozinka }, (err, korisnik) => {
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
            korisnik_1.default.findOne({ 'korisnickoIme': korisnickoIme }, (err, resp) => {
                if (err)
                    console.log(err);
                else if (resp) {
                    res.json({ 'message': 'Korisnicko ime je zauzeto.' });
                }
                else {
                    let data = new korisnik_1.default({
                        korisnickoIme: korisnickoIme,
                        lozinka: lozinka,
                        privilegija: privilegija
                    });
                    data.save((err, resp) => {
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