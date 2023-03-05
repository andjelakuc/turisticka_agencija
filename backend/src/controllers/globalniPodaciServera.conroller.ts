import express from 'express'
import GlobalniPodaciServera from '../models/globalniPodaciServera';

export class GlobalniPodaciServeraController {

    dohvatiGlobalnePodatkeServera = (req: express.Request, res: express.Response) => {
        
        GlobalniPodaciServera.findOne({}, (err, informacija) => {
            if (err) console.log(err);
            else res.json(informacija)
        })
    }

    dohvatiSledeciIdAranzmana = (req: express.Request, res: express.Response) => {
        
        GlobalniPodaciServera.findOneAndUpdate({ 'id': 0 }, { $inc: { sledeciIdRezervacije: 1 } }, (err, informacija) => {
            if (err) console.log(err);
            else res.json(informacija)
        })
    }

    inicijalizujGlobalnePodatkeServera = (req: express.Request, res: express.Response) => {
        
        let sledeciIdRezervacije = 1;
        let id = 0;
        let data = new GlobalniPodaciServera({
            sledeciIdRezervacije: sledeciIdRezervacije,
            id: id
        })

        data.save((err, resp) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }



}