const Station = require('../models/Station');
const Info = require('../models/Info');

var { PythonShell } = require('python-shell');
const chalk = require('chalk');

const pythonCtrl = {};

pythonCtrl.usePython = async (req, res) => {
    const { id } = req.params;
    const station = await Station.findOne({ _id: id }).populate('data.info',{ '__v': 0, '_id': 0 });
    const info = station.data[0].info
    var options = {
        args: [
            info
        ]
    };
    PythonShell.run("server/tools/test.py", options, function(err, data) {
        if (err) console.error(chalk.red(err));
        console.log(data.toString());
    });
    res.json(info)
};//Checked

module.exports = pythonCtrl;