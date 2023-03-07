import express from 'express';
import { AranzmanController } from '../controllers/aranzman.controller';

const aranzmanRouter = express.Router();

aranzmanRouter.route('/dohvatiSveAranzmane').post(
    (req, res)=> new AranzmanController().dohvatiSveAranzmane(req, res)
)

aranzmanRouter.route('/dohvatiBrojAranzmana').get(
    (req, res)=> new AranzmanController().dohvatiVelicinu(req, res)
)

aranzmanRouter.route('/dodajAranzman').post(
    (req, res)=> new AranzmanController().dodajAranzman(req, res)
)



export default aranzmanRouter;