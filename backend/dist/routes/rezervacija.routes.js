"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rezervacija_controller_1 = require("../controllers/rezervacija.controller");
const rezervacijaRouter = express_1.default.Router();
rezervacijaRouter.route('/dodajRezervaciju').get((req, res) => new rezervacija_controller_1.RezervacijaController().dodajRezervaciju(req, res));
rezervacijaRouter.route('/dohvatiSveRezervacije').get((req, res) => new rezervacija_controller_1.RezervacijaController().dohvatiSveRezervacije(req, res));
rezervacijaRouter.route('/azurirajRezervaciju').get((req, res) => new rezervacija_controller_1.RezervacijaController().azurirajRezervaciju(req, res));
exports.default = rezervacijaRouter;
//# sourceMappingURL=rezervacija.routes.js.map