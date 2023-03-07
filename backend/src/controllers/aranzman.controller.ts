import express from 'express'
import { db } from '../server';
import Aranzman from '../models/aranzman';

export class AranzmanController {

    //povratna vrednost je lista aranzmana
    dohvatiSveAranzmane = (req: express.Request, res: express.Response) => {
        let skip = req.body.skip; 
        let limit = req.body.limit; 
        db.collection('Aranzmani').find().skip(skip).limit(limit).toArray(function(err, results) {
            res.send(results);
        });
    }

    dohvatiAranzmanePretraga = (req: express.Request, res: express.Response) => {
        //obavezno sa frontenda slati lokacije kao niz!
        console.log("pozvan");
        let naziv = req.body.naziv;
        let prevoz = req.body.prevoz;
        let datumPolaska = req.body.datumPolaska;
        let datumPovratka = req.body.datumPovratka;
        let lokacije = req.body.lokacije;
        
        let skip = req.body.skip; 
        let limit = req.body.limit; 

        console.log("naziv"+naziv);
        console.log("prevoz"+prevoz);
        console.log("datumPolaska"+datumPolaska);
        console.log("datumPovratka"+datumPovratka);
        console.log("lokacije"+lokacije);

        console.log("skip"+skip);
        console.log("limit"+limit)

        let bezNaziva = naziv == null ? true:false;
        let bezPrevoza = prevoz == null ? true:false;
        let bezDatumaPolaska = datumPolaska == null ? true:false;
        let bezDatumaPovratkailiPolaska = (datumPolaska == null || datumPovratka == null) ? true:false;
        let bezLokacija = lokacije == null ? true:false;

        db.collection('Aranzmani').find(//{$and: [
            {'naziv' : {$regex: '(?i)'+naziv+'(?-i)'}}, 
            {'prevoz': {$regex: '^(?i)'+prevoz+'(?-i)$'}}
            //{'datumPolaska': {$cond: {if: bezDatumaPolaska ==null, then:{$exists: true}, else:{$eq: datumPolaska}}}},
            //{'datumPovratka': {$cond: {if: bezDatumaPovratkailiPolaska, then:{$exists: true}, else:{$eq: datumPovratka}}}},
            //{'lokacije': {$cond: {if: bezLokacija, then:{$exists: true}, else: {$in: lokacije}}}}
        //]}
        ).skip(skip).limit(limit).toArray(function(err, results) {
            console.log(results);
            res.send(results);
        });
    }

    dohvatiVelicinu =(req: express.Request, res: express.Response) => {
       db.collection('Aranzmani').find().count((err, resp) => {
        if (err) console.log(err)
        else res.json(resp)
    });
    }

    

    dodajAranzman = (req: express.Request, res: express.Response) => {
        
        //let id = req.body.id;
        let naziv = req.body.naziv;
        let lokacije = req.body.lokacije;
        let prevoz = req.body.prevoz;
        let datumPolaska = req.body.datumPolaska;
        let datumPovratka = req.body.datumPovratka;
        let trajanje = req.body.trajanje;
        let opis = req.body.opis;
        let cena = req.body.cena;
        let smestaj = req.body.smestaj;
        let napomena = req.body.napomena;
        let slika = req.body.slika;

        //provera da li je naziv jedinstven

        db.collection('Aranzmani').findOne({'naziv': naziv}, (err, ar)=>{
            if(err) console.log(err);
            else if(ar) {
                res.json({'message':'Ime nije jedinstveno!'});
            }else {
                db.collection('Aranzmani').find({}, (err, maxAr)=>{
                    if(err) console.log(err);
                    else{
                        let id = 0
                        if(maxAr != null){
                            id = maxAr[0].id + 1;
                        }
                        db.collection('Aranzmani').insertOne(
                            {
                                id: id,
                                naziv: naziv,
                                lokacije: lokacije,
                                prevoz: prevoz,
                                datumPolaska: datumPolaska,
                                datumPovratka: datumPovratka,
                                trajanje: trajanje,
                                opis: opis,
                                cena: cena,
                                smestaj: smestaj,
                                napomena: napomena,
                                slika: slika
                            }, (err, resp) => {
                                if (err) console.log(err)
                                else if (resp) res.json({ 'message': 'ok' })
                            }
                        );
                    }
                }).sort({'id': -1}).limit(1)
            }
        })
    }
}