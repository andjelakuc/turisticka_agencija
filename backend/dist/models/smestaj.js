"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Smestaj = new Schema({
    id: {
        type: Number
    },
    ime: {
        type: String
    },
    tip: {
        type: String
    },
    kategorija: {
        type: Number
    },
    internet: {
        type: Boolean
    },
    tv: {
        type: Boolean
    },
    ac: {
        type: Boolean
    },
    frizider: {
        type: Boolean
    },
    sef: {
        type: Boolean
    },
    fotografije: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('Smestaj', Smestaj, 'Smestaji');
//# sourceMappingURL=smestaj.js.map