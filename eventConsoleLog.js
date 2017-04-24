eventsConfige = require('./eventsConfige.js').eventsConfige.events;
require('./BasketballPlayer.js').BasketballPlayer;

exports.increaseMsg = function (player){
    player.playerLog.debug(
      `Increase Basketball player: ${player.playerName}, total player 
        trophies are ${player.trophies}`
    );
}

exports.decreaseMsg = function (player){
    player.playerLog.debug(
        `Deacrease Basketball player: ${player.playerName} total player 
        trophies are ${player.trophies}`
    );
}

exports.decreaseErrorMsg = function (player){
    player.playerLog.debug(
          `Can not deacrease Basketball player: ${player.playerName},
           total player trophies are ${player.trophies}`
    );
}