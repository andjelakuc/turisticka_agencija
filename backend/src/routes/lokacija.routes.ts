import express from 'express';
import { LokacijaController } from '../controllers/lokacija.controller';

const lokacijaRouter = express.Router();

lokacijaRouter.route('/dohvatiLokaciju').get(
    (req, res)=> new LokacijaController().dohvatiLokaciju(req, res)
)

lokacijaRouter.route('/dodajAranzman').get(
    (req, res)=> new LokacijaController().dodajLokaciju(req, res)
)



export default lokacijaRouter;