import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Smestaj = new Schema(
    {   
        id: {
            type:Number
        },
        idLokacije: {
            type:Number
        },
        ime: {
            type: String
        },
        tip: {
            type: String
        },
        kategorija: {
            type: Number
        },
        internet: {
            type: Boolean
        },
        tv: {
            type: Boolean
        },
        ac: {
            type: Boolean
        },
        frizider: {
            type: Boolean
        },
        sef: {
            type: Boolean
        },
        fotografije: {
            type: Array
        }
    }
    
)

export default mongoose.model('Smestaj', Smestaj, 'Smestaji');