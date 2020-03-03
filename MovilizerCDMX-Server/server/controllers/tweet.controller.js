const Tweet = require('../models/Tweet');

const twitterCtrl = {};

twitterCtrl.getTweets = async (req, res) => {
    const tweets = await Tweet.find({},{ _id: 0, __v: 0}).sort({ date: -1 });
    res.json(tweets)
};//Checked

module.exports = twitterCtrl;