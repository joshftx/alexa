var http       = require('https')
  , AlexaSkill = require('./AlexaSkill')
  , APP_ID     = 'amzn1.echo-sdk-ams.app.e44a2706-aa57-4bcc-a6b4-b2fe2ba1ebac'
 

var url = function(request){return 'https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.tiph&format=json';};

var getShow = function(request, callback) {

      http.get(url(request), function(res){
      var body = '';

      res.on('data', function(data){
          body += data;


      });

      res.on('end', function(){

            var result = JSON.parse(body);
         //var pnetResponse = phResponse[0];
           //callback(result);
        //   console.log(result)
            callback(null,result);
         // console.log("Got a response: ", result.relativetime );

         // console.log(data);


      });

      }).on('error', function(e){a
        console.log("Got an error: ", e);
        });
};

var pnetResponse = getShow();
console.log(pnetResponse);
//var cardText = pnetResponse.relativetime + ' phish played in ' + pnetResponse.city + ' at ' + pnetResponse.venue + ' on ' + pnetResponse.nicedate

//console.log (cardText);

/*var phishShow = function(){
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
};*/

 
