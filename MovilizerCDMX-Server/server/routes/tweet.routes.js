const express = require('express');
const router = express.Router();

const twitter = require('../controllers/tweet.controller');

router.get('/tweets', twitter.getTweets);//Checked


module.exports = router;