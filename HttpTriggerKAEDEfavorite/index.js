module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var Twitter = require('twitter');

    //入力Tweet
    var inputTweet = req;

    context.log('Create client.');
    //Twitterクライアントの作成
    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    context.log('Created client!!.');

    if(inputTweet.body.match(/MediaUrls/) ){
        client.post('favorites/create', {id: inputTweet.body.TweetId}, function(error, tweet, response) {
            if(error) throw error;
            console.log(tweets);  // The favorites.
            console.log(response);  // Raw response object.
        });
}
};