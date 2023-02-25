"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/prijavaNaSistem').post((req, res) => new korisnik_controller_1.KorisnikController().prijavaNaSistem(req, res));
korisnikRouter.route('/dodajKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().dodajKorisnika(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map