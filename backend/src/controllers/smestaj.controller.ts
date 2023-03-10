import express from 'express'
import { db } from '../server';

export class SmestajController {
    dohvatiSmestaj = (req: express.Request, res: express.Response)=>{
        
        let id = req.body.id;
        db.collection('Smestaji').findOne({'id': id},(err, smestaj)=>{
            if(err) console.log(err);
            else res.json(smestaj)
        });
    }

    dohvatiSveSmestaje = (req: express.Request, res: express.Response) => {
        db.collection('Smestaji').find().toArray(function(err, results) {
            res.send(results);
        });
    }


    dodajSmestaj = (req: express.Request, res: express.Response) => {
        
        //let id = req.body.id;
        let idLokacije = req.body.idLokacije;
        let ime = req.body.ime;
        let tip = req.body.tip;
        let kategorija = req.body.kategorija;
        let internet = req.body.internet;
        let tv = req.body.tv;
        let ac = req.body.ac;
        let frizider = req.body.frizider;
        let sef = req.body.sef;
        let fotografije = req.body.fotografije;

        db.collection('Smestaji').find({}, (err, maxSmes)=>{
            if(err) console.log(err);
            else{
                let id = 0
                if(maxSmes != null){
                    id = maxSmes[0].id + 1;
                }
                db.collection('Smestaji').insertOne(
                    {
                        id: id,
                        idLokacije : idLokacije,
                        ime: ime,
                        tip: tip,
                        kategorija: kategorija,
                        internet: internet,
                        tv: tv,
                        ac: ac,
                        frizider: frizider,
                        sef: sef,
                        fotografije: fotografije
                    }, (err, resp) => {
                        if (err) console.log(err)
                        else if (resp) res.json({ 'message': 'ok' })
                    }
                );
            }
        }).sort({'id': -1}).limit(1)
    }

}










