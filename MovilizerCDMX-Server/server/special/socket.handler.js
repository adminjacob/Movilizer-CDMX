var cron = require('node-cron');
var lineCtrl = require('../controllers/line.controller');
const stations = require('../stations');
const paths = require('../paths');
const Station = require('../controllers/station.controller');
const path = require('path');
const chalk = require('chalk');
/**
 * obtiene la direccion de fotos aleatoriamente
 */
function obtainExternalPhotos() {
    const random = Math.floor(Math.random() * (paths.length));
    const pathImage = path.join(__dirname, "../images/" + paths[random])
    return pathImage;
}
/**
 * Se itera sobre cada estacion y se actualiza la base de datos
 * @param  io el manejador de sockets
 */
async function updateDB(io) {
    for (let item of stations) {
        const pathImage = obtainExternalPhotos();
        const result = await Station.addInformation(item, pathImage, io);
        console.log(result);
    }
    console.log(chalk.green("Todo bajo control joven!"))
}

module.exports = async (io) => {
    io.on('connection', socket => {
        console.log(chalk.yellow('[[Conexion establecida]]'))
        socket.on('disconnect', () => {
            console.log("desconectado");
        });
        socket.on('join-room', id => {
            socket.join(`room-${id}`);
        })
    })

    //Se actualiza la base cada hora.
    cron.schedule('*/35 * * * *', async function () {
        await updateDB(io);
    });
}