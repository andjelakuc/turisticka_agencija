import express from 'express'
import Korisnik from '../models/korisnik';

export class KorisnikController{

     prijavaNaSistem = (req: express.Request, res: express.Response)=>{
        
        let korisnickoIme = req.body.korisnickoIme;
        let lozinka = req.body.lozinka;

        Korisnik.findOneAndUpdate({'korisnickoIme': korisnickoIme, 'lozinka': lozinka},(err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik)
        })
    }


    dodajKorisnika = ( req: express.Request, res: express.Response)=>{
        
        let korisnickoIme = req.body.korisnickoIme;
        let lozinka= req.body.lozinka;
        let privilegija = req.body.privilegija

        Korisnik.findOne({'korisnickoIme': korisnickoIme}, (err, resp)=>{
            if (err) console.log(err)
            else if (resp){
                res.json({'message':'Korisnicko ime je zauzeto.'});
                } else{
                    let data = new Korisnik({
                        korisnickoIme: korisnickoIme,
                        lozinka: lozinka,
                        privilegija: privilegija
                    })
                    data.save((err,resp)=>{
                        if (err) console.log(err)
                        else res.json({'message': 'ok'})
                    })
                }
            })
        }


}