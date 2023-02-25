import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijavaNaSistem').post(
    (req, res)=> new KorisnikController().prijavaNaSistem(req, res)
)

korisnikRouter.route('/dodajKorisnika').post(
    (req, res)=> new KorisnikController().dodajKorisnika(req, res)
)


export default korisnikRouter; 