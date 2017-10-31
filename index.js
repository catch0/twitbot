const config = require('./config');
const twit = require('twit');

const T = new twit(config);

function searchTwitter() {
  const params = {
    q: '@willfisher4cong',
    count: 5,
    result_type: ['recent', 'popular'],
    language: 'en'
  }
  return T.get('search/tweets', params)
  .then(function(res){
    const tweet = res.data.statuses[0];
    if(!tweet){
      throw new Error('No Status found');
    }
    return tweet;
  });
}

function retweet(){
  return searchTwitter()
  .then(function(status){
    return T.post('statuses/retweet/:id', {id: status.id_str});
  })
  .catch(function(err){
    console.log("error retweeting", err)
  });
}

retweet();
