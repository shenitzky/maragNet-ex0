EventEmitter = require('events');
eventsConfige = require('./eventsConfige.js').eventsConfige.events;
moment = require('moment');
eventConsoleLog = require('./eventConsoleLog.js');
Log = require('./Log.js').Log;


exports.BasketballPlayer = class BasketballPlayer extends EventEmitter {

    constructor(playerName) {
       super();
       this.trophies = 0;
       this.playerName = playerName;
       this.playerLog = new Log();

       this.playerLog.debug(
          `Basketball player: ${playerName} creation completed`
        );

       //Set functions to perform on INCREASE event
       this.on(eventsConfige.INCREASE, function(){
          eventConsoleLog.increaseMsg(this);
       });
       //Set functions to perform on DECREASE event
       this.on(eventsConfige.DECREASE, function(){
          eventConsoleLog.decreaseMsg(this);
        });
       //Set functions to perform on DECREASE_BELOW_ZERO_ERROR event
       this.on(
        eventsConfige.DECREASE_BELOW_ZERO_ERROR, function(){
          eventConsoleLog.decreaseErrorMsg(this);
        });
   }

    increaseTrophies(trophiesNumToIncrease) {
        this.trophies += trophiesNumToIncrease;
        this.emit(eventsConfige.INCREASE);
    }

    decreaseTrophies(trophiesNumToDecrase) {
      if((this.trophies - trophiesNumToDecrase) < 0){
        this.emit(eventsConfige.DECREASE_BELOW_ZERO_ERROR);
        }
        else{
          this.trophies -= trophiesNumToDecrase;
          this.emit(eventsConfige.DECREASE);
        }
    }
}