const config = require('./config');
const twit = require('twit');

const T = new twit(config);

function searchTwitter() {
  const params = {
    q: '#gostars',
    count: 100,
    result_type: ['recent', 'popular'],
    language: 'en'
  }
  return T.get('search/tweets', params)
  .then(function(res){
    //grabbing the first
        // const tweet = res.data.statuses[0];
    //grabbing a random one
    const tweet = res.data.statuses[Math.floor(Math.random() * res.data.statuses.length)];
    if(!tweet){
      throw new Error('No Status found');
    }
    return tweet;
  });
}

function postTweet(url, params){
    return T.post(url, params, function(err){
      if(err){
        console.log('ohh shit something dun fucked up with the posting', err);
        return;
      }
      console.log('Post Tweet Successful!')
    });
}

//right now this just retweets any mention
function retweet(){
  return searchTwitter()
  .then(function(status){
    return postTweet('statuses/retweet/:id', {id: status.id_str})
    console.log(status)
  })
  .catch(function(err){
    console.log("error retweeting", err)
  });
}

function favourite(){
  return searchTwitter()
  .then(function(status){
    return postTweet('favorites/create', {id: status.id_str})
  })
  .catch(function(err){
    console.log("error favoriting", err)
  });
}

// retweet();
favourite();
