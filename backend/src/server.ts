import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import aranzmanRouter from './routes/aranzman.routes';

const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/turisticka_agencija') // localhost zamenjen sa 127.0.0.1(resenje sa neta)

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('db connected')
})

const router = express.Router();

router.use('/aranzman', aranzmanRouter );

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));