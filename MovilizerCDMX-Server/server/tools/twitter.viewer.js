const chalk = require('chalk');
const Tweet = require('../models/Tweet');
const twitter_credential = require('../keys/twitter-credential.json');

//Twit.js
var Twit = require('twit');

//Twit Credentials
var client = new Twit(twitter_credential);

module.exports = () => {
    // Id Metro '147227083'
    // Get Tweets in real Time
    var stream = client.stream('statuses/filter', {tweet_mode: 'extended', follow: '863398359977078785'});
    stream.on('tweet', function(data) {
        const { truncated } = data;
        const { created_at } = data;
        var text;
        if (truncated) {
            text = data.extended_tweet.full_text;
        } else {
            text = data.text;
        }
        if(text.toUpperCase().includes('#AVISOMETRO')){
            var splittedText = text.split(' ');
            const lastItem = splittedText[splittedText.length - 1];
            if(lastItem.startsWith('https://t.co/')){
                splittedText.pop();
                text = splittedText.join(' ');
            }
            const tweet = new Tweet({
                text: text,
                date: created_at
            });
            tweet.save();
            console.log(chalk.black.bgYellow('Warn:'),'New Tweet Added');
        }
    });
    stream.on('error', function(error) {
        throw error;
    });
}// Checked