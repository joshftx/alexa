var http       = require('http')
  , AlexaSkill = require('./AlexaSkill')
  , APP_ID     = 'amzn1.echo-sdk-ams.app.e44a2706-aa57-4bcc-a6b4-b2fe2ba1ebac'
 

var url ='http://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.tiph&format=json';


var getShow = function(url, callback) {

  http.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          var phResponse = JSON.parse(body);
          callback(phResponse);
          console.log("Got a response: ", phResponse);
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
  });
};

getShow();
var cardText = phResponse.relativetime + ' phish played in ' + phResponse.city + ' at ' + phResponse.venue + ' on ' + phResponse.nicedate

var phishShow = function(){
  AlexaSkill.call(this, APP_ID);
};

phishShow.prototype = Object.create(AlexaSkill.prototype);
phishShow.prototype.constructor = phishShow;


phishShow.prototype.eventHandlers.onLaunch = function(launchRequest, session, response){
  var output = 'Welcome to Today in Fish History. ';

  var reprompt = 'What do you want to find out?';

  response.ask(output, reprompt);
};


phishShow.prototype.intentHandlers = {
  GetTodayinPhistory: function(intent, session, response){
response.ask(cardText);  

 },

  HelpIntent: function(intent, session, response){
    var speechOutput = 'Ask me when fish played today in history';
    response.ask(speechOutput);
  }
};


exports.handler = function(event, context) {
    var skill = new phishShow();
    skill.execute(event, context);
};

 
