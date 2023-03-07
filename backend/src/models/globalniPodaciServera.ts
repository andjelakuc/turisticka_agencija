import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let GlobalniPodaciServera = new Schema(
    {
        sledeciIdRezervacije: {
            type: Number
        },
        id: {
            type: Number
        }
    }
)

export default mongoose.model('GlobalniPodaciServera', GlobalniPodaciServera, 'GlobalniPodaciServera');