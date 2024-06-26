const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Usuario = require("../models/model_usuario");

function cifrarSenha(senha, salto) {
   const hash = crypto.createHmac("sha256", salto);
   hash.update(senha);
   return hash.digest('hex');
}

async function criar(req, res) {
  const salto = crypto.randomBytes(16).toString('hex');
  const senhaCifrada = cifrarSenha(req.body.senha, salto);

  const novoUsuario = await Usuario.create({
    nome: req.body.nome,
    senha: senhaCifrada,
    salto
   });
  res
    .status(201)
    .json({ 
      id: novoUsuario._id.toString(), 
      nome: novoUsuario.nome,
      senha: novoUsuario.senha,
      salto: novoUsuario.salto
     });
}

async function entrar(req, res) {
  const usuarioEncontrado = await Usuario.findOne({ nome: req.body.nome });
  if (usuarioEncontrado) {
    const senhaCifrada = cifrarSenha(req.body.senha, usuarioEncontrado.salto);
    if (usuarioEncontrado.senha === senhaCifrada) {
      res.json({ token: jwt.sign({nome: usuarioEncontrado.nome}, process.env.SEGREDO, {expiresIn: '1h'}) });
    } else {
      res.status(401).json({ msg: "acesso negado" });
    }
  } else {
    res.status(400).json({ msg: "credenciais invalidas" });
  }
}

function renovar(req, res) {
  const token = req.headers['authorization'];
  if (token) {
    try {
        const payload = jwt.verify(token, process.env.SEGREDO);
        res.json({ token: jwt.sign({ nome: payload.nome }, process.env.SEGREDO)});
    } catch (e) {
      res.status(401).json({ msg: "token invalido" });
    }
  } else {
    res.status(400).json({ msg: "token nao enviado "});
  }
}

module.exports = { criar, entrar, renovar };