const Line = require('../models/Line');
const lineCtrl = {};
const stationCtrl = require('../controllers/station.controller');

const chalk = require('chalk');
var moment = require('moment');
moment().format();

lineCtrl.getLines = async (req, res) => {
    const lines = await Line.find({}, { _id: 0, __v: 0 });
    res.json(lines)
};//Checked

lineCtrl.getStations = async (req, res) => {
    const { idLine } = req.params;
    stationCtrl.getStationsByLine(idLine, async (cb) => {
        res.json(cb);
    });
};//Checked

lineCtrl.getOnServerLine = async (id) => {
    const res = null;
    const line = await Line.findOne({id: id}).populate({ path: 'stations', populate: { path: 'infos' } })
    return line;
};//Robin Development

lineCtrl.addLine = async (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { from_to } = req.body;
    const newLine = new Line({
        id: id,
        name: name,
        from_to: from_to
    });
    await newLine.save()
     .then(() => {
        res.json({
            status: 'Line Saved'
        });
     })
     .catch((err) => {
         console.log(err)
        res.json({
            status: 'Fail to save line'
        });
     });
};//Checked

lineCtrl.addStation = async (req, res) => {
    const { idLine } = req.params;
    const { name } = req.body;
    const { data } = req.body;
    const line = await Line.findOne({ id: idLine });
    if (line == null) {
        res.json({
            status: 'Fail to Add Station'
        });
    }
    else {
        stationCtrl.addStation(name, idLine, data, async (cb) => {
            res.json({
                status: cb
            });
        });
    }
};//Checked

lineCtrl.addLineTricky = async (data) => {
    const { id } = data;
    const { name } = data;
    const { from_to } = data;
    const newLine = new Line({
        id: id,
        name: name,
        from_to: from_to
    });
    await newLine.save()
     .then(() => {
        console.log(chalk.black.bgGreen('Success:'),'Line Saved');
     })
     .catch(() => {
        console.log(chalk.black.bgRed('Error:'),'Fail to Save Line');
     });
};//Tested

lineCtrl.addStationTricky = async (obj) => {
    const { idLine } = obj;
    const { name } = obj;
    const { data } = obj;
    const { order } = obj;
    const line = await Line.findOne({ id: idLine});
    if (line == null) {
        console.log(chalkblack.bgRed('Error:'),'Fail to Add Station');
    }
    else {
        stationCtrl.addStation(name, idLine, data, order, async (cb) => {
            console.log(cb);
        });
    }
};//Tested

module.exports = lineCtrl;