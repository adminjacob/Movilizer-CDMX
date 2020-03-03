const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    text: { type: String, required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Tweet', TweetSchema);