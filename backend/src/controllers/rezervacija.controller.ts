import express from 'express'
import Rezervacija from '../models/rezervacija';


export class RezervacijaController {

    dodajRezervaciju = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let telefon = req.body.telefon;
        let email = req.body.email;
        let nacinPlacanja = req.body.nacinPlacanja;
        let brojOdraslih = req.body.brojOdraslih;
        let brojDece = req.body.brojDece;
        let komentar = req.body.komentar;
        let status = req.body.status;

        let data = new Rezervacija({
            id: id,
            ime: ime,
            prezime: prezime,
            telefon: telefon,
            email: email,
            nacinPlacanja: nacinPlacanja,
            brojOdraslih: brojOdraslih,
            brojDece: brojDece,
            komentar: komentar,
            status: status
        })

        data.save((err, resp) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

    dohvatiSveRezervacije = (req: express.Request, res: express.Response) => {
        
        Rezervacija.find({}, (err, aranzmani) => {
            if (err) console.log(err);
            else res.json(aranzmani);
        })
    }

    
    azurirajRezervaciju = (req: express.Request, res: express.Response) => {
        
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

        Rezervacija.updateOne({ 'id': id },
            {
                $set: {
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
                    vremePovratka: vremePovratka
                }
            }, (err, resp) => {
                if (err) console.log(err)
                else if (resp) res.json({ 'message': 'ok' })
            })
    }
    

    
}