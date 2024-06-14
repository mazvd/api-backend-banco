const { MongoClient } = require('mongodb');

let db = null;

const url = 'mongodb+srv://mlimatheus14:7VJUyaDC77WAIwJS@musicas-api.0bzren4.mongodb.net/?retryWrites=true&w=majority&appName=musicas-api';

async function conectarDb() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url);
    await client.connect();
    db = client.db('musicas');
    return db;
}

module.exports = conectarDb;