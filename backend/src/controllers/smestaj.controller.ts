import express from 'express'
import Smestaj from '../models/smestaj';
import { db } from '../server';

export class SmestajController {
    dohvatiSmestaj = (req: express.Request, res: express.Response)=>{
        
        let id = req.body.id;
        console.log("id=" + id);
        db.collection('Smestaji').findOne({'id': id},(err, smestaj)=>{
            if(err) console.log(err);
            else{
                console.log(smestaj);
                res.json(smestaj);
            } 
        });
    }

    dodajSmestaj = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;
        let ime = req.body.ime;
        let tip = req.body.tip;
        let kategorija = req.body.kategorija;
        let internet = req.body.internet;
        let tv = req.body.tv;
        let ac = req.body.ac;
        let frizider = req.body.frizider;
        let sef = req.body.sef;
        let fotografije = req.body.fotografije;

        let data = new Smestaj({
            id: id,
            ime: ime,
            tip: tip,
            kategorija: kategorija,
            internet: internet,
            tv: tv,
            ac: ac,
            frizider: frizider,
            sef: sef,
            fotografije: fotografije
        })

        data.save((err, resp) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

}










