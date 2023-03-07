"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmestajController = void 0;
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
            //let id = req.body.id;
            let idLokacije = req.body.idLokacije;
            let ime = req.body.ime;
            let tip = req.body.tip;
            let kategorija = req.body.kategorija;
            let internet = req.body.internet;
            let tv = req.body.tv;
            let ac = req.body.ac;
            let frizider = req.body.frizider;
            let sef = req.body.sef;
            let fotografije = req.body.fotografije;
            server_1.db.collection('Smestaji').find({}, (err, maxSmes) => {
                if (err)
                    console.log(err);
                else {
                    let id = 0;
                    if (maxSmes != null) {
                        id = maxSmes[0].id + 1;
                    }
                    server_1.db.collection('Smestaji').insertOne({
                        id: id,
                        idLokacije: idLokacije,
                        ime: ime,
                        tip: tip,
                        kategorija: kategorija,
                        internet: internet,
                        tv: tv,
                        ac: ac,
                        frizider: frizider,
                        sef: sef,
                        fotografije: fotografije
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
exports.SmestajController = SmestajController;
//# sourceMappingURL=smestaj.controller.js.map