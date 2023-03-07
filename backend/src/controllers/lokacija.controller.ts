import express from 'express'
import { db } from '../server';

export class LokacijaController {
    dohvatiLokaciju = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;

        db.collection('Lokacije').findOne({ 'id': id }, (err, smestaj) => {
            if (err) console.log(err);
            else res.json(smestaj);
        })
    }

    
    dohvatiSveLokacije = (req: express.Request, res: express.Response) => {
        db.collection('Lokacije').find().toArray(function(err, results) {
            res.send(results);
          });
    }

    dohvatiLokacijePretraga = (req: express.Request, res: express.Response) => {
        
        let naziv = req.body.naziv;
        let drzava = req.body.drzava;
        let kontinent = req.body.kontinent;

        let bezNaziva = naziv == null? true:false;
        let bezDrzave = drzava == null? true:false;
        let bezKontinenta = kontinent == null? true:false;

        db.collection('Lokacije').findOne({
             'naziv': {$cond: { if: bezNaziva, then: {$exists:true}, else: {regex: '(?i)'+naziv+'(?-i)'}}},
             'drzava': {$cond: { if: bezDrzave, then: {$exists:true}, else: {regex: '(?i)'+drzava+'(?-i)'}}},
             'kontinent' : {$cond: { if: bezKontinenta, then: {$exists:true}, else: {regex: '(?i)'+kontinent+'(?-i)'}}} 
            }, (err, smestaj) => {
            if (err) console.log(err);
            else res.json(smestaj);
        })
    }

    // (б) naziv, претрагу по континенту, држави


    dodajLokaciju = (req: express.Request, res: express.Response) => {

        let naziv = req.body.naziv;
        let drzava = req.body.drzava;
        let kontinent = req.body.kontinent;
        let  fotografija= req.body.fotografija;

        db.collection('Lokacije').find({}, (err, maxLok)=>{
            if(err) console.log(err);
            else{
                let id = 0
                if(maxLok != null){
                    id = maxLok[0].id + 1;
                }
                db.collection('Lokacije').insertOne(
                    {
                        id: id,
                        naziv: naziv,
                        drzava: drzava,
                        kontinent: kontinent,
                        fotografija: fotografija
                    }, (err, resp) => {
                        if (err) console.log(err)
                        else if (resp) res.json({ 'message': 'ok' })
                    }
                );
            }
        }).sort({'id': -1}).limit(1)
    }

}










