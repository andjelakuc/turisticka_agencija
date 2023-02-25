import express from 'express';
import { AranzmanController } from '../controllers/aranzman.controller';

const aranzmanRouter = express.Router();

aranzmanRouter.route('/dohvatiSveAranzmane').get(
    (req, res)=> new AranzmanController().dohvatiSveAranzmane(req, res)
)



export default aranzmanRouter;