const mongoose = require("mongoose");

const Musica = require("../models/model_musicas");

async function validar(req, res, next) {
  try {
    const musica = new Musica(req.body);
    await musica.validate();
    next();
  } catch (error) {
    res.status(422).json({ msg: "Musica inválida" });
  }
}

async function criar(req, res) {
  const musicas = await Musica.create(req.body);
  res.status(201).json(musica);
}

async function listar(req, res) {
  const musicas = await Musica.find({});
  res.json(musicas);
}

async function buscar(req, res, next) {
  try {
    const id = new mongoose.Types.ObjectId.createFromHexString(req.params.id);
    const musica = await Musica.findOne({ _id: id });
    if (musica) {
      next();
    } else {
      res.status(404).json({ msg: "Música não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Id invalido" });
  }
}

async function obter(req, res) {
    const id = new mongoose.Types.ObjectId.createFromHexString(req.params.id);
  const musica = await Musica.findOne({ _id: id });
  res.json(musica);
}

async function atualizar(req, res) {
    const id = new mongoose.Types.ObjectId.createFromHexString(req.params.id);
  const musica = await Musica.findOneAndUpdate({ _id: id }, req.body);
  res.json(produto);
}

async function remover(req, res) {
  const id = new mongoose.Types.ObjectId.createFromHexString(req.params.id);
  await Musica.findOneAndDelete({ _id: id });
  res.status(204).end();
}

module.exports = { 
  criar, validar, listar, obter, buscar, atualizar, remover 
};