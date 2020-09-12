const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://fafram:@fafram*2020@cluster0.vkbem.mongodb.net/<dbname>?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs')

app.post('/show', (req, res) => {
    db.collection('alunos').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/')
    })
})

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('fafram')

    app.listen(3000, function () {
        console.log('Servidor rodando na porta 3000')
    })
})

