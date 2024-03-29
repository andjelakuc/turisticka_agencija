"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const aranzman_routes_1 = __importDefault(require("./routes/aranzman.routes"));
const korisnik_routes_1 = __importDefault(require("./routes/korisnik.routes"));
const smestaj_router_1 = __importDefault(require("./routes/smestaj.router"));
const lokacija_routes_1 = __importDefault(require("./routes/lokacija.routes"));
const rezervacija_routes_1 = __importDefault(require("./routes/rezervacija.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200' // Allow requests from this origin
}));
//app.use(express.json())
app.use(express_1.default.json(({ limit: '50mb' })));
app.use(express_1.default.urlencoded({ limit: '50mb', parameterLimit: 100000, extended: true }));
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'turisticka_agencija';
mongodb_1.MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log('Error connecting to MongoDB', err);
    }
    else {
        console.log('Connected to MongoDB successfully');
        exports.db = client.db(dbName);
        //Here you can define your Express routes that use the database connection
        app.get('/', function (req, res) {
            exports.db.collection('Aranzmani').find().toArray(function (err, results) {
                res.send(results);
            });
        });
        // Start the Express app
        app.listen(4000, function () {
            console.log('Express app listening on port 4000');
        });
        const router = express_1.default.Router();
        router.use('/aranzman', aranzman_routes_1.default);
        router.use('/korisnici', korisnik_routes_1.default);
        router.use('/smestaj', smestaj_router_1.default);
        router.use('/lokacija', lokacija_routes_1.default);
        router.use('/rezervacija', rezervacija_routes_1.default);
        app.use('/', router);
    }
});
//# sourceMappingURL=server.js.map