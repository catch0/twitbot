// bot will find tweets that mention American Horror Story and log the text to the console
const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const stream = T.stream('user');
const usa = [ '-126.83', '25.64', '-64.86', '49.84'];
//grabs a tween when the name michael burgess is mentioned
const params = {
  q: "rep michael burgess",
  count: 5,
  language: 'en',
  result_type: 'recent',
};
// grabs tweets when someone says linsey is running against burgess
const params2 = {
  q: "@linseyfagantx is running ",
  count: 5,
  language: 'en'
};

const params3 = {
  q: "\"Horse Penis\"",
  count: 5,
  language: 'en'
}

T.get('search/tweets', params , gotData);
 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){
     console.log("tweet" + (i+1));
     console.log("Text:  " + tweets[i].text);
     console.log("User:   " + tweets[i].user.name);
     console.log("Time:" + tweets[i].created_at);
     console.log("status id" + tweets[i].id)
     console.log(tweets[i])
  }
}
