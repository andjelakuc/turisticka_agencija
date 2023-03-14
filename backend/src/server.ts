import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

import aranzmanRouter from './routes/aranzman.routes';
import korisnikRouter from './routes/korisnik.routes';
import smestajRouter from './routes/smestaj.router';
import lokacijaRouter from './routes/lokacija.routes';
import rezervacijaRouter from './routes/rezervacija.routes';

const app: Application = express();
app.use(cors())
app.use(cors({
    origin: 'http://localhost:4200' // Allow requests from this origin
  }));
//app.use(express.json())
app.use(express.json(({limit: '50mb'})))
app.use(express.urlencoded({limit: '50mb', parameterLimit: 100000,extended: true }));

const url: string = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName: string = 'turisticka_agencija';

export var db;


MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Error connecting to MongoDB', err);
  } else {
    console.log('Connected to MongoDB successfully');

    db = client.db(dbName);

    //Here you can define your Express routes that use the database connection
    app.get('/', function(req: Request, res: Response) {
      db.collection('Aranzmani').find().toArray(function(err, results) {
        res.send(results);
      });
    }); 

    // Start the Express app
    app.listen(4000, function() {
      console.log('Express app listening on port 4000');
    });

    const router = express.Router();
    router.use('/aranzman', aranzmanRouter );
    router.use('/korisnici', korisnikRouter );
    router.use('/smestaj', smestajRouter );
    router.use('/lokacija', lokacijaRouter );
    router.use('/rezervacija', rezervacijaRouter);
    app.use('/', router);
  }

});