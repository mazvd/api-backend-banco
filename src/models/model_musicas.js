const mongoose = require("mongoose");

const schemaMusica = new mongoose.Schema({
  titulo: { 
    type: String, 
    required: true,
    maxLenght: 60 
  },
  album: {
    type: String,
  },
  artista: {
    type: String,
  }
});

module.exports = mongoose.model('Musica', schemaMusica);