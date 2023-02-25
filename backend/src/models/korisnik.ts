import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Korisnik = new Schema(
    {
        korisnickoIme: {
            type: String
        },
        lozinka: {
            type: String
        },
        privilegija: {
            type: String
        }
    }
)

export default mongoose.model('Korisnik', Korisnik, 'Korisnici');