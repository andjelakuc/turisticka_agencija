import express from 'express';
import { AranzmanController } from '../controllers/aranzman.controller';

const aranzmanRouter = express.Router();

aranzmanRouter.route('/dohvatiSveAranzmane').post(
    (req, res)=> new AranzmanController().dohvatiSveAranzmane(req, res)
)

aranzmanRouter.route('/dohvatiAranzmanePretraga').post(
    (req, res)=> new AranzmanController().dohvatiAranzmanePretraga(req, res)
)

aranzmanRouter.route('/dohvatiBrojAranzmana').post(
    (req, res)=> new AranzmanController().dohvatiVelicinu(req, res)
)

aranzmanRouter.route('/dodajAranzman').post(
    (req, res)=> new AranzmanController().dodajAranzman(req, res)
)


aranzmanRouter.route('/azurirajAranzman').post(
    (req, res)=> new AranzmanController().azurirajAranzman(req, res)
)

aranzmanRouter.route('/obrisiAranzman').post(
    (req, res)=> new AranzmanController().obrisiAranzman(req, res)
)



export default aranzmanRouter;