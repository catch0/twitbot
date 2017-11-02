//this function will search grab and reply 
const config = require('./config');
const twit = require('twit');
const T = new twit(config);

const params = {
  q: "\" Horse Penis\"",
  count: 2,
  language: 'en'
};


T.get('search/tweets', params , gotData);
 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){
     var statusObj = {status: "sup @" + tweets[i].user.screen_name + "? I overheard talk of horse penises. Just wanted to let you know you can get that at arby's",
                     in_reply_to_status_id: tweets[i].id_str
                    }
  T.post('statuses/update', statusObj, function(err, tweetReply, resp){
    if(err){
      console.log("error in replying", err)
    }
      console.log("grab and reply worked")
    });
  }
}
