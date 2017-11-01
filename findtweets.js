// bot will find tweets that mention American Horror Story and log the text to the console
const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const stream = T.stream('user');

//grabs a tween when the name michael burgess is mentioned
const params = {
  q: "\"Michael Burgess\"",
  count: 20,
  language: 'en',
  result_type: 'recent'
};
// grabs a tweet when his handle is actually mentioned
const params2 = {
  q: "fagan is running",
  count: 10,
  language: 'en'
};
// grabs tweets when someone says linsey is running against burgess
const params3 = {
  q: "@linseyfagantx is running ",
  count: 5,
  language: 'en'
};

T.get('search/tweets', params3, gotData);


 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){
     console.log("tweet" + (i+1));
     console.log("Text:  " + tweets[i].text);
     console.log("User:   " + tweets[i].user.name);
     console.log("Time:" + tweets[i].created_at);
   }
};
