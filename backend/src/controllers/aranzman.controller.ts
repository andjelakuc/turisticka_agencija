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
}