"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LokacijaController = void 0;
const server_1 = require("../server");
class LokacijaController {
    constructor() {
        this.dohvatiLokaciju = (req, res) => {
            let id = req.body.id;
            server_1.db.collection('Lokacije').findOne({ 'id': id }, (err, smestaj) => {
                if (err)
                    console.log(err);
                else
                    res.json(smestaj);
            });
        };
        this.dohvatiSveLokacije = (req, res) => {
            server_1.db.collection('Lokacije').find().toArray(function (err, results) {
                res.send(results);
            });
        };
        this.dohvatiLokacijePretraga = (req, res) => {
            let naziv = req.body.naziv;
            let drzava = req.body.drzava;
            let kontinent = req.body.kontinent;
            let bezNaziva = naziv == null ? true : false;
            let bezDrzave = drzava == null ? true : false;
            let bezKontinenta = kontinent == null ? true : false;
            server_1.db.collection('Lokacije').findOne({
                'naziv': { $regex: '(?i)' + naziv + '(?-i)' },
                'drzava': { $regex: '(?i)' + drzava + '(?-i)' },
                'kontinent': { regex: '(?i)' + kontinent + '(?-i)' }
            }, (err, smestaj) => {
                if (err)
                    console.log(err);
                else
                    res.json(smestaj);
            });
        };
        // (б) naziv, претрагу по континенту, држави
        this.dodajLokaciju = (req, res) => {
            let naziv = req.body.naziv;
            let drzava = req.body.drzava;
            let kontinent = req.body.kontinent;
            let fotografija = req.body.fotografija;
            server_1.db.collection('Lokacije').find({}, (err, maxLok) => {
                if (err)
                    console.log(err);
                else {
                    let id = 0;
                    if (maxLok != null) {
                        id = maxLok[0].id + 1;
                    }
                    server_1.db.collection('Lokacije').insertOne({
                        id: id,
                        naziv: naziv,
                        drzava: drzava,
                        kontinent: kontinent,
                        fotografija: fotografija
                    }, (err, resp) => {
                        if (err)
                            console.log(err);
                        else if (resp)
                            res.json({ 'message': 'ok' });
                    });
                }
            }).sort({ 'id': -1 }).limit(1);
        };
    }
}
exports.LokacijaController = LokacijaController;
//# sourceMappingURL=lokacija.controller.js.map