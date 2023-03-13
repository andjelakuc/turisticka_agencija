import express from 'express';
import { AranzmanController } from './controllers/aranzman.controller';

export class Test{

    testiraj = (req: express.Request, res: express.Response) => {
        req.body = {
            naziv : "",
            prevoz :"",
            datumPolaska : "",
            datumPovratka : "",
            lokacije : null
        }
        var resFromAranzman;
        new AranzmanController().dohvatiVelicinu(req, resFromAranzman)
        console.log(resFromAranzman);
        if(resFromAranzman == 60000)
            res.send("Uspesno provererano da ima 60000 aranzmana");
        else
            res.send("Test nije prosao jer je broj aranzmana" + resFromAranzman);
    }
}