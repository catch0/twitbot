//this listens for a tweet and then replies
console.log("stream listen and reply starting...")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


var stream = T.stream('statuses/filter', {track: "#dumbtwitterbots"})
  stream.on('tweet', function(tweet){
    console.log("we found a tweet...");
    var statusObj = {status: "sup @" + tweet.user.screen_name + "? I heard you loud and clear #goteyeseverwhere #watchyourself",
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
