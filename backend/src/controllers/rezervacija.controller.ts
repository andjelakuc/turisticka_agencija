import express from 'express'
import { db } from '../server';

export class RezervacijaController {

    dodajRezervaciju = (req: express.Request, res: express.Response) => {
        let nazivAranzmana = req.body.nazivAranzmana;
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let telefon = req.body.telefon;
        let email = req.body.email;
        let nacinPlacanja = req.body.nacinPlacanja;
        let brojOdraslih = req.body.brojOdraslih;
        let brojDece = req.body.brojDece;
        let komentar = req.body.komentar;
        let status = req.body.status;
        db.collection('Rezervacije').find().sort({'id': -1}).limit(1).toArray( function(err, maxRez){
            if(err) console.log(err);
            else{
                let id = 0
                if(maxRez.length != 0){
                    console.log(maxRez);
                    id = maxRez[0].id + 1;
                }
                db.collection('Rezervacije').insertOne(
                    {
                        id: id,
                        nazivAranzmana : nazivAranzmana,
                        ime: ime,
                        prezime: prezime,
                        telefon: telefon,
                        email: email,
                        nacinPlacanja : nacinPlacanja,
                        brojOdraslih : brojOdraslih,
                        brojDece : brojDece,
                        komentar : komentar,
                        status : status
                    }, (err, resp) => {
                        if (err) console.log(err)
                        else if (resp) res.json({ 'message': 'ok' })
                    }
                );
            }
        });
    }

    dohvatiSveRezervacije = (req: express.Request, res: express.Response) => {
        db.collection('Rezervacije').find().toArray(function(err, results) {
            res.send(results);
        });
    }

    
    azurirajRezervaciju = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;
        let status = req.body.status; 

        db.collection('Rezervacije').updateOne({ 'id': id },
            {
                $set: {
                    status : status
                }
            }, (err, resp) => {
                if (err) console.log(err)
                else if (resp) res.json({ 'message': 'ok' })
        });
    }
    

    
}