// const express = require('express')
// const mongoose = require('mongoose')


// const app = express()
// app.use(express.json())
// const port = 3000

// const Musica = mongoose.model('Musica', {
//     titulo: String,
//     artista: String,
//     album: String
// });


// app.get("/", async (req, res) => {
//     const musicas = await Musica.find()
//     res.send(musicas)
//     })

// app.delete("/:id", async(req, res) => {
//     const musica = await Musica.findByIdAndDelete(req.params.id)
//     res.send(musica)
// })

// app.put("/:id", async (req, res) => {
//     const musica = await Musica.findByIdAndUpdate(req.params.id, {
//         titulo: req.body.titulo,
//         artista: req.body.artista,
//         album: req.body.album,
//     }, {
//         new: true
//     })
//     return res.send(musica)
// })
// app.post('/', async (req, res) => {
//     const musica = new Musica({
//         titulo: req.body.titulo,
//         artista: req.body.artista,
//         album: req.body.album
//     })
//     await musica.save()
//     res.send(musica)
// });

// app.listen(port, () => {
//     mongoose.connect('mongodb+srv://mlimatheus14:7VJUyaDC77WAIwJS@musicas-api.0bzren4.mongodb.net/?retryWrites=true&w=majority&appName=musicas-api');
//     console.log(`api rodando na porta: ${port}`)
// })