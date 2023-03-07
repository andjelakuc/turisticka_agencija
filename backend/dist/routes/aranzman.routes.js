"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aranzman_controller_1 = require("../controllers/aranzman.controller");
const aranzmanRouter = express_1.default.Router();
aranzmanRouter.route('/dohvatiSveAranzmane').post((req, res) => new aranzman_controller_1.AranzmanController().dohvatiSveAranzmane(req, res));
aranzmanRouter.route('/dohvatiAranzmanePretraga').post((req, res) => new aranzman_controller_1.AranzmanController().dohvatiAranzmanePretraga(req, res));
aranzmanRouter.route('/dohvatiBrojAranzmana').get((req, res) => new aranzman_controller_1.AranzmanController().dohvatiVelicinu(req, res));
aranzmanRouter.route('/dodajAranzman').post((req, res) => new aranzman_controller_1.AranzmanController().dodajAranzman(req, res));
exports.default = aranzmanRouter;
//# sourceMappingURL=aranzman.routes.js.map