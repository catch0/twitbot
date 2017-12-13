console.log("stream grab and print starting...")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('statuses/user_timeline', {screen_name: "HenryLoudsound"})
  stream.on('tweet', function(tweet){
    console.log("we found a tweet...");
    var statusObj = {status: "sup @" + tweet.user.screen_name + "? Don't talk that way about italians kapiche? #goteyeseverwhere #watchyourself",
                    in_reply_to_status_id: tweet.id_str
    }
    T.post('statuses/update', statusObj, function(err,tweetReply, resp){
      if(err){
        console.log("error in posting", err)
      }
      console.log("it worked!!");
      console.log(tweetReply.text);
    });
  });
