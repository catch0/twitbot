//this listens for a tweet and then replies
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


T.get('statuses/user_timeline', {screen_name: 'brandnew535', language: 'en'} , gotData);
 function gotData(err, data, response) {
   console.log(data)
   for(var i = 0; i < data.length; i++){
     console.log("tweet" + (i+1));
     console.log("Text:  " + data[i].text);
     console.log("User:   " + data[i].user.name);
     console.log("Time:" + data[i].created_at);
     console.log("status id" + data[i].id);
  }
}
