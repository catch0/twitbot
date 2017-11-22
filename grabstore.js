//this listens for a tweet and then replies
console.log("stream listen and reply starting...")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


//this function will search grab and reply
const config = require('./config');
const twit = require('twit');
const T = new twit(config);

const params = {
  q: "@brandnewcongress",
  count: 2,
  language: 'en'
};
// 
const message = "I overheard talk of horse penises. You might like arby's new menu"

T.get('search/tweets', params , gotData);
 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){

  //    var statusObj = {status: "@" + tweets[i].user.screen_name + message,
  //                    in_reply_to_status_id: tweets[i].id_str
  //                   }
  // T.post('statuses/update', statusObj, function(err, tweetReply, resp){
  //   if(err){
  //     console.log("error in replying", err)
  //   }
  //     console.log("grab and reply worked");
  //     console.log("statusObj")
  //   });
  }
}
