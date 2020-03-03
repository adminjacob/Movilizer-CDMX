const mongoose = require('mongoose');
const { Schema } = mongoose;

var moment = require('moment');
moment().format();
var now = moment();

const InfoSchema = new Schema({
    crowdPercent: { type: Number, required: true },
    date: { type: Date, default: now, required: true }
});

module.exports = mongoose.model('Info', InfoSchema);