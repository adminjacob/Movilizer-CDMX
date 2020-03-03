// Requires
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const http = require('http');
const path = require('path');
const chalk = require('chalk');

const twitterViewer = require('./tools/twitter.viewer');
const handler = require('./special/socket.handler');

// Files for create the DB
/*
const createStations = require('./generator/createStations');
const Line = require('./controllers/line.controller');
const lines = require('./generator/createLines');
*/

// Database
const { mongoose } = require('./database/database');

// Server
const server = http.createServer(app);
const io = require('socket.io')(server);
// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.static(__dirname+'public'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/lines',require('./routes/line.routes'));
app.use('/stations',require('./routes/station.routes'));
app.use('/python', require('./routes/python.routes'))
app.use('/twitter', require('./routes/tweet.routes'));

// Settings
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'public')));

// Starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port',chalk.blue.bold(app.get('port')));
    handler(io);
    twitterViewer();
    // Create lines and their stations in DB
    /*
    for(let line of lines){
        Line.addLineTricky(line);
    }
    */
    /*
    for(let station of createStations){
        Line.addStationTricky(station);
    }
    */
});