exports.Log = class Log {

  constructor(){
    this.logContainer = [];
  }

  debug(msg){
    var currentTime = moment().format('YYYY-MM-DD HH:mm:ss Z');
    var debugMsg = `DEBUG ${currentTime}: ${msg}`;
    this.logContainer.push(debugMsg);
    console.log(debugMsg);
  }
}