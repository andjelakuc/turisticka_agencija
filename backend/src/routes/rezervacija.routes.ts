import express from 'express';
import { RezervacijaController } from '../controllers/rezervacija.controller';

const rezervacijaRouter = express.Router();

rezervacijaRouter.route('/dodajRezervaciju').get(
    (req, res)=> new RezervacijaController().dodajRezervaciju(req, res)
)

rezervacijaRouter.route('/dohvatiSveRezervacije').get(
    (req, res)=> new RezervacijaController().dohvatiSveRezervacije(req, res)
)

rezervacijaRouter.route('/dodajLokaciju').get(
    (req, res)=> new RezervacijaController().azurirajRezervaciju(req, res)
)



export default rezervacijaRouter;