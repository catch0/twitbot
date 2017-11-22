//this listens for a tweet and then replies
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


T.get('statuses/user_timeline', {screen_name: 'brandnew535', language: 'en'} , gotData);
 function gotData(err, data, response) {
   var tweets = data.statuses;
   console.log(data)
  //  for(var i = 0; i < tweets.length; i++){
  //    console.log("tweet" + (i+1));
  //    console.log("Text:  " + tweets[i].text);
  //    console.log("User:   " + tweets[i].user.name);
  //    console.log("Time:" + tweets[i].created_at);
  //    console.log("status id" + tweets[i].id);
  //    console.log(tweets[i])
  // }
}
