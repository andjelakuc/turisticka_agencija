"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Rezervacija = new Schema({
    naziv: {
        type: String
    },
    drzava: {
        type: String
    },
    kontinent: {
        type: String
    },
    fotografija: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('Rezervaija', Rezervacija, 'Rezervacije');
//# sourceMappingURL=rezervacija.js.map