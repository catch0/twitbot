//wait for a follow and tweet at the new follower
console.log("the follow bot is starting.....")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//setting up the stream
var stream = T.stream('user');
//anytime someone follows me
stream.on('follow',followed)


function followed(eventMsg){
  console.log("the follow bot is starting")
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName + ' thanks 4 following. I am a baby bot learning to be HUMAN! ');
}

function tweetIt(txt){
      var tweet = {
        status: txt
      }
      T.post('statuses/update', tweet, tweeted);
      function tweeted(err, data, response){
        if(err){
          console.log("there was an error", err);
        }
        else{
          console.log("it worked!!!")
        }
    }
}
