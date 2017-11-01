//wait for a follow and tweet at the new follower
console.log("the reply bot is starting.....")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//setting up the stream
var stream = T.stream('user');
//anytime someone follows me
stream.on('tweet', tweetEvent)


function tweetEvent(eventMsg){
  var replyto = eventMsg.in_reply_to_screen_name;
  var from = eventMsg.user.screen_name;
  var text = eventMsg.txt;

  console.log(replyto + '' + from);
  if (replyto === 'HenryLoudsound'){
    var newTweet = 'fuck yeah @' + from + ' I can read you loud and clear. This is my first succesfull reply!! I am SUPER STOKED!! #nodejs '
    tweetIt(newTweet);
  }
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
