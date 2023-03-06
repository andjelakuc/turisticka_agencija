"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalniPodaciServeraController = void 0;
const globalniPodaciServera_1 = __importDefault(require("../models/globalniPodaciServera"));
class GlobalniPodaciServeraController {
    constructor() {
        this.dohvatiGlobalnePodatkeServera = (req, res) => {
            globalniPodaciServera_1.default.findOne({}, (err, informacija) => {
                if (err)
                    console.log(err);
                else
                    res.json(informacija);
            });
        };
        this.dohvatiSledeciIdAranzmana = (req, res) => {
            globalniPodaciServera_1.default.findOneAndUpdate({ 'id': 0 }, { $inc: { sledeciIdRezervacije: 1 } }, (err, informacija) => {
                if (err)
                    console.log(err);
                else
                    res.json(informacija);
            });
        };
        this.inicijalizujGlobalnePodatkeServera = (req, res) => {
            let sledeciIdRezervacije = 1;
            let id = 0;
            let data = new globalniPodaciServera_1.default({
                sledeciIdRezervacije: sledeciIdRezervacije,
                id: id
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
exports.GlobalniPodaciServeraController = GlobalniPodaciServeraController;
//# sourceMappingURL=globalniPodaciServera.conroller.js.map