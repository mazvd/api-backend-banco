const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: String,
  senha: String,
  salto: String
});

module.exports = mongoose.model("Usuario", userSchema);