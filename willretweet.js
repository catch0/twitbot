//retweeting from a specific user's timeline
const config = require('./config');
const twit = require('twit');
const T = new twit(config);

function willGrab(){
  const params = {
    user_id: '865898987836014592',
    exclude_replies: true,
    include_rts: false,
    count: 10
  }
return T.get('statuses/user_timeline', params)
.then(function(res){
  const tweet = res.data;
  if(!tweet){
    throw new Error('No Status found');
  }
  return tweet;
});
}

function willRetweet(){
  return willGrab()
  .then(function(status){
    return T.post('statuses/retweet/:id', {id: status.id_str});
    console.log(" that worked")
  })
  .catch(function(err){
    console.log("error timeline retweet", err);
  });
}

willRetweet();
