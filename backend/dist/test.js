"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const aranzman_controller_1 = require("./controllers/aranzman.controller");
class Test {
    constructor() {
        this.testiraj = (req, res) => {
            req.body = {
                naziv: "",
                prevoz: "",
                datumPolaska: "",
                datumPovratka: "",
                lokacije: null
            };
            var resFromAranzman;
            new aranzman_controller_1.AranzmanController().dohvatiVelicinu(req, resFromAranzman);
            console.log(resFromAranzman);
            if (resFromAranzman == 60000)
                res.send("Uspesno provererano da ima 60000 aranzmana");
            else
                res.send("Test nije prosao jer je broj aranzmana" + resFromAranzman);
        };
    }
}
exports.Test = Test;
//# sourceMappingURL=test.js.map