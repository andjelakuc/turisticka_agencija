"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const smestaj_controller_1 = require("../controllers/smestaj.controller");
const smestajRouter = express_1.default.Router();
smestajRouter.route('/dohvatiSmestaj').get((req, res) => new smestaj_controller_1.SmestajController().dohvatiSmestaj(req, res));
smestajRouter.route('/dodajAranzman').get((req, res) => new smestaj_controller_1.SmestajController().dodajSmestaj(req, res));
exports.default = smestajRouter;
//# sourceMappingURL=smestaj.router.js.map