import express from 'express';
import { LokacijaController } from '../controllers/lokacija.controller';

const lokacijaRouter = express.Router();

lokacijaRouter.route('/dohvatiLokaciju').get(
    (req, res)=> new LokacijaController().dohvatiLokaciju(req, res)
)

lokacijaRouter.route('/dohvatiSveLokacije').get(
    (req, res)=> new LokacijaController().dohvatiSveLokacije(req, res)
)

lokacijaRouter.route('/dohvatiLokacijePretraga').post(
    (req, res)=> new LokacijaController().dohvatiLokacijePretraga(req, res)
)

lokacijaRouter.route('/dodajLokaciju').get(
    (req, res)=> new LokacijaController().dodajLokaciju(req, res)
)



export default lokacijaRouter;