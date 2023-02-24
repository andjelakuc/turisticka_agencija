import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Aranzman = new Schema(
    {
        id: {
            type: Number
        },
        naziv: {
            type: String
        },
        lokacije: {
            type: Array
        },
        prevoz: {
            type: String
        },
        datumPolaska:{
            type: Date
        },
        datumPovratka: {
            type: Date
        },
        trajanje:{
            type: Number
        },
        opis: {
            type: String
        },
        cena:{
            type: Number
        },
        smestaj: {
            type: Array
        },
        napomena:{
            type: String
        }, 
        slika:{
            type: String
        },
        vremePolaska:{
            type: Date
        },
        mestoPolaska:{
            type: String
        },
        vremePovratka:{
            type:String
        }
    }
)

export default mongoose.model('Aranzman', Aranzman, 'Aranzmani');