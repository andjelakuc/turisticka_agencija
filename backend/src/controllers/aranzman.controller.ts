import express from 'express'
import Aranzman from '../models/aranzman';

export class AranzmanController {

    //povratna vrednost je lista aranzmana
    dohvatiSveAranzmane = (req: express.Request, res: express.Response) => {
        
        Aranzman.find({}, (err, aranzmani) => {
            if (err) console.log(err);
            else res.json(aranzmani);
        })
    }


    dodajAranzman = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;
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
        let vremePolaska = req.body.vremePolaska;
        let mestoPolaska = req.body.mestoPolaska;
        let vremePovratka = req.body.vremePovratka;

        let data = new Aranzman({
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
            slika: slika,
            vremePolaska: vremePolaska,
            mestoPolaska: mestoPolaska,
            vremePovratka: vremePovratka,
        })

        data.save((err, resp) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }
}