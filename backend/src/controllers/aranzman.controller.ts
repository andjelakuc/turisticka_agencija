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
        //         омогућава се претрага по термину коjа укључуjе претрагу назива и/или
        // локациjе
        // (б) претрагу по континенту, држави
        // (в) претрагу по типу превоза ////////////////////
        // (г) претрагу по календару - корисник може да наведе жељени датум почетка путовања као и опционо, краjњи датум путовања. 
        //Уколико наведе оба,
        // филтрирати све аранжмане у тачно том интервалу. Ако наведе само почетни датум, онда приказати сва путовања са тим почетним 
        //датумом, без
        // обзира на траjање аранжмана.
        let naziv = req.body.naziv;
        let prevoz = req.body.prevoz;
        let datumPolaska = req.body.datumPolaska;
        let datumPovratka = req.body.datumPovratka;
        let lokacije = req.body.lokacije;
        
        let skip = req.body.skip; 
        let limit = req.body.limit; 
        db.collection('Aranzmani').find().skip(skip).limit(limit).toArray(function(err, results) {
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