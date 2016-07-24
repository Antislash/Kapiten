var express = require('express');
var app = express();
var path = require('path');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mydb');

mongoose.connection.on("error", function(){
	conseole.log("Erreur de connexion à la base de données");
});

mongoose.connection.on("open", function(){
	console.log("Connexion à la base de donnée réussie");
})

// viewed at http://localhost:8080
app.get('/', function(req, res) {
	console.log("Connexion au seveur");
    res.sendFile(path.join(__dirname + '/../index.html'));
});

app.listen(8080);

app.use(express.static(path.join(__dirname, '..'))); //Pour pouvoir utiliser des chemins relatifs dans les fichier utilisés