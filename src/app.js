require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const routerDocs = require('./routes/router_docs');
const routerMusicas = require('./routes/router_musicas');
const routerUsuario = require('./routes/router_usuario');

mongoose.connect(process.env.MONGODB_URL);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/docs', routerDocs);
app.use('/musicas', routerMusicas);
app.use('/usuario', routerUsuario);

module.exports = app;

