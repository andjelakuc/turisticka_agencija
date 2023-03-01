import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Rezervacija = new Schema(
    {   
        naziv: {
            type: String
        },
        drzava: {
            type: String
        },
        kontinent: {
            type: String
        },
        fotografija: {
            type: Array
        }
    }
    
)

export default mongoose.model('Rezervaija', Rezervacija, 'Rezervacije');