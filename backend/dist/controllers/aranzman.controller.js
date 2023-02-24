"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AranzmanController = void 0;
const aranzman_1 = __importDefault(require("../models/aranzman"));
class AranzmanController {
    constructor() {
        //povratna vrednost je lista aranzmana
        this.dohvatiSveAranzmane = (req, res) => {
            aranzman_1.default.find({}, (err, aranzmani) => {
                if (err)
                    console.log(err);
                else
                    res.json(aranzmani);
            });
        };
    }
}
exports.AranzmanController = AranzmanController;
//# sourceMappingURL=aranzman.controller.js.map