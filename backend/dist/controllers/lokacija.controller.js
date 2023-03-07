"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LokacijaController = void 0;
const lokacija_1 = __importDefault(require("../models/lokacija"));
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
        this.dodajLokaciju = (req, res) => {
            let naziv = req.body.naziv;
            let drzava = req.body.drzava;
            let kontinent = req.body.kontinent;
            let fotografija = req.body.fotografija;
            let data = new lokacija_1.default({
                naziv: naziv,
                drzava: drzava,
                kontinent: kontinent,
                fotografija: fotografija
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
exports.LokacijaController = LokacijaController;
//# sourceMappingURL=lokacija.controller.js.map