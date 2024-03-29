import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Lokacija = new Schema(
    {   
        id: {
            type: Number
        },
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

export default mongoose.model('Lokacija', Lokacija, 'Lokacije');