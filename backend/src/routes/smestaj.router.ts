import express from 'express';
import { SmestajController } from '../controllers/smestaj.controller';

const smestajRouter = express.Router();

smestajRouter.route('/dohvatiSmestaj').get(
    (req, res)=> new SmestajController().dohvatiSmestaj(req, res)
)

smestajRouter.route('/dodajAranzman').get(
    (req, res)=> new SmestajController().dodajSmestaj(req, res)
)



export default smestajRouter;