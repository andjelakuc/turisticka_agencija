import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app: Application = express();
app.use(cors());

const url: string = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName: string = 'turisticka_agencija';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Error connecting to MongoDB', err);
  } else {
    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);

    // Here you can define your Express routes that use the database connection
    app.get('/', function(req: Request, res: Response) {
      db.collection('myCollection').find().toArray(function(err, results) {
        res.send(results);
      });
    });

    // Start the Express app
    app.listen(4000, function() {
      console.log('Express app listening on port 4000');
    });
  }
});

// mongoose.connect('mongodb://database/turisticka_agencija') // localhost zamenjen sa 127.0.0.1(resenje sa neta)

// const connection = mongoose.connection
// connection.once('open', ()=>{
//     console.log('db connected')
// })

// const router = express.Router();

// var port = '4000';

// app.set('port', port);


// router.use('/aranzman', aranzmanRouter );
// router.use('/korisnici', korisnikRouter );

// app.use('/', router);
// app.listen(400, () => console.log(`Express server running on njegov port `+ port));