"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Aranzman = new Schema({
    id: {
        type: Number
    },
    naziv: {
        type: String
    },
    lokacije: {
        type: Array
    },
    prevoz: {
        type: String
    },
    datumPolaska: {
        type: Date
    },
    datumPovratka: {
        type: Date
    },
    trajanje: {
        type: Number
    },
    opis: {
        type: String
    },
    cena: {
        type: Number
    },
    smestaj: {
        type: Array
    },
    napomena: {
        type: String
    },
    slika: {
        type: String
    },
    vremePolaska: {
        type: Date
    },
    mestoPolaska: {
        type: String
    },
    vremePovratka: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Aranzman', Aranzman, 'Aranzmani');
//# sourceMappingURL=aranzman.js.map