let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', "ejs");

app.listen(8080)
console.log("Serwer na porcie 8080 został uruchomiony")
let tablicaPostow = [];


app.get('/', function(req, res) {
    res.render('index', {dane:tablicaPostow})
})

app.get('/dodaj', function(req, res) {
    res.render('form')
})

app.post('/dodaj', function(req, res) {
    let ob = {
        tytul: req.body['tytul'],
        tresc: req.body['tresc']
    }
    tablicaPostow.push(ob);
    res.render('index', {dane:tablicaPostow})
})

app.get('/edytuj/:id', function(req, res) {
    let index = req.params.id;
    res.render('edytuj', {dane:tablicaPostow[index], indexTab:index})
})

app.post('/edytuj/:id', function(req, res) {
    let index = req.params.id;
    let ob = {
        tytul: req.body['tytul'],
        tresc: req.body['tresc']
    }
    tablicaPostow[index] = ob
    res.render('index', {dane:tablicaPostow})
})




app.get('/usun/:id', function(req, res) {
    let index = req.params.id;
    tablicaPostow.splice(index, 1)
    res.render('index', {dane:tablicaPostow})
})

