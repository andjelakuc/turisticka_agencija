"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmestajController = void 0;
const smestaj_1 = __importDefault(require("../models/smestaj"));
const server_1 = require("../server");
class SmestajController {
    constructor() {
        this.dohvatiSmestaj = (req, res) => {
            let id = req.body.id;
            server_1.db.collection('Smestaji').findOne({ 'id': id }, (err, smestaj) => {
                if (err)
                    console.log(err);
                else
                    res.json(smestaj);
            });
        };
        this.dodajSmestaj = (req, res) => {
            let id = req.body.id;
            let ime = req.body.ime;
            let tip = req.body.tip;
            let kategorija = req.body.kategorija;
            let internet = req.body.internet;
            let tv = req.body.tv;
            let ac = req.body.ac;
            let frizider = req.body.frizider;
            let sef = req.body.sef;
            let fotografije = req.body.fotografije;
            let data = new smestaj_1.default({
                id: id,
                ime: ime,
                tip: tip,
                kategorija: kategorija,
                internet: internet,
                tv: tv,
                ac: ac,
                frizider: frizider,
                sef: sef,
                fotografije: fotografije
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
exports.SmestajController = SmestajController;
//# sourceMappingURL=smestaj.controller.js.map