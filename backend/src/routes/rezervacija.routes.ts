import express from 'express';
import { RezervacijaController } from '../controllers/rezervacija.controller';

const rezervacijaRouter = express.Router();

rezervacijaRouter.route('/dodajRezervaciju').post(
    (req, res)=> new RezervacijaController().dodajRezervaciju(req, res)
)

rezervacijaRouter.route('/dohvatiSveRezervacije').get(
    (req, res)=> new RezervacijaController().dohvatiSveRezervacije(req, res)
)

rezervacijaRouter.route('/azurirajRezervaciju').post(
    (req, res)=> new RezervacijaController().azurirajRezervaciju(req, res)
)



export default rezervacijaRouter;