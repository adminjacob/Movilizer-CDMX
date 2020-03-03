const mongoose = require('mongoose');
const chalk = require('chalk')

const URI = 'mongodb://localhost/MovilizerCDMX';

mongoose.connect(URI,{useNewUrlParser: true})
    .then(db => console.log(chalk.black.bgGreen('Success:'),'DB is connected'))
    .catch(err => console.log(chalk.black.bgRed('Error:'),err));

module.exports = mongoose;