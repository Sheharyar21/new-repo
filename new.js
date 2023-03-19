console.log("Starting");

var express = require('express');   

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
    
console.log("furqan");

console.log("new");
