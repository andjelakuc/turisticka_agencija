import express from 'express'
import Lokacija from '../models/lokacija';
import { db } from '../server';

export class LokacijaController {
    dohvatiLokaciju = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;

        db.collection('Lokacije').findOne({ 'id': id }, (err, smestaj) => {
            if (err) console.log(err);
            else res.json(smestaj);
        })
    }

    dodajLokaciju = (req: express.Request, res: express.Response) => {
        
        let naziv = req.body.naziv;
        let drzava = req.body.drzava;
        let kontinent = req.body.kontinent;
        let  fotografija= req.body.fotografija;

        let data = new Lokacija({
            naziv: naziv,
            drzava: drzava,
            kontinent: kontinent,
            fotografija: fotografija
        })

        data.save((err, resp) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

}










