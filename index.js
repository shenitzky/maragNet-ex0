var http    = require('http'),
    express = require('express'),
    BasketballPlayer = require('./BasketballPlayer.js').BasketballPlayer;

var app = express();

app.get('/', function(req,res){
    var player = new BasketballPlayer('Eyal The Shooter');

    player.increaseTrophies(7);
    player.decreaseTrophies(5);
    player.decreaseTrophies(3);
    player.increaseTrophies(50);

    var desc = player.playerLog.logContainer;
    res.send(desc);
});
http.createServer(app).listen(8080);