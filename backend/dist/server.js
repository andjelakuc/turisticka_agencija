"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'turisticka_agencija';
mongodb_1.MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log('Error connecting to MongoDB', err);
    }
    else {
        console.log('Connected to MongoDB successfully');
        const db = client.db(dbName);
        // Here you can define your Express routes that use the database connection
        app.get('/', function (req, res) {
            db.collection('myCollection').find().toArray(function (err, results) {
                res.send(results);
            });
        });
        // Start the Express app
        app.listen(4000, function () {
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
//# sourceMappingURL=server.js.map