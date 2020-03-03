const Station = require('../models/Station');
const Info = require('../models/Info');

const stationCtrl = {};

const chalk = require('chalk');
// Libreria de Google Cloud Vision, ¡Muy importante!
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: './server/keys/Movilizer-CDMX-8f7f5df74b76.json'
});

stationCtrl.addStation = async (name, idLine, data, order, cb) => {
    const newStation = new Station({
        name: name,
        idLine: idLine,
        order: order,
        data: data
    });
    await newStation.save()
        .then(() => {
            cb('Station Added');
        })
        .catch((err) => {
            cb(err);
        });
}; //Checked


stationCtrl.getStationsByLine = async (idLine, cb) => {
    let stations = await Station.find({
        idLine: idLine
    }, {
        _id: 0,
        __v: 0,
        'data._id': 0
    }).sort({ order:  1 }).populate({
        path: 'data.info',
        select: {
            _id: 0,
            __v: 0
        }
    });
    var newStations = new Array();
    for (let station of stations) {
        const way1 = station.data[0];
        const way2 = station.data[1];
        let way1Info = way1.info;
        let way2Info = way2.info;
        if (way1Info.length != 0 || way2Info.length != 0) {
            way1Info.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            way2Info.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            const way1LastInfo = way1Info[0];
            const way2LastInfo = way2Info[0];
            const obj = {
                name: station.name,
                idLine: station.idLine,
                data: [{
                        way: way1.way,
                        date: way1LastInfo.date,
                        crowdPercent: way1LastInfo.crowdPercent
                    },
                    {
                        way: way2.way,
                        date: way2LastInfo.date,
                        crowdPercent: way2LastInfo.crowdPercent
                    }
                ]
            };
            newStations.push(obj);
        } else {
            const obj = {
                name: station.name,
                idLine: station.idLine,
                data: [{
                        way: way1.way
                    },
                    {
                        way: way2.way
                    }
                ]
            };
            newStations.push(obj);
        }
    }
    cb(newStations);
}; //Checked


//Función en estado de aprobacion, resultados varaibles en diferentes computadores:
/**
 *  Funcion para añadir informacion de cada linea, (planeada para añadir in-
 *  formacion cada cinco minutos)
 * @param data es la informacion de cada estacion
 * @param path la direccion de la fotografia
 * @param io el dispensador de sockets
 */
stationCtrl.addInformation = async (data, path, io) => {
    //console.log(data);
    const {
        name
    } = data;
    const {
        idLine
    } = data;
    const {
        way
    } = data;
    const station = await Station.findOne({
        name: name,
        idLine: idLine
    });

    //Este hijo del nabo era el que me estaba provocando las alucinaciones
    //para mas info:  https://cloud.google.com/vision/docs/detecting-labels
    const [result] = await client.labelDetection(path);
    //gracias al "await" ya no utilizo un "for" sino un objeto entero.
    let percent = 0;
    const labels = result.labelAnnotations;
    const crowds = labels.filter(obj => obj.description == 'Crowd');
    if (station == null) {
        return chalk.red(`
        ERROR : Al parecer la estacion no existeen la linea ${idLine}
        `);
    } else {
        //utilizando la "ternaria" para evitar verbosidad
        percent = crowds[0] ? crowds[0].score : 0;

        const newInfo = new Info({
            crowdPercent: percent
        });
        await newInfo.save();
        //actualizando y obteniendo la nueva estacion.
        const estacion = await Station.findOneAndUpdate({
            name: name,
            idLine: idLine,
            'data.way': way
        }, {
            $addToSet: {
                'data.$.info': newInfo._id
            },
            new: true
        }).populate({
            path: 'data.info',
            select: {
                _id: 0,
                __v: 0
            }
        });

        //enviando la nueva estacion para dar la sensacion de actualizacion rapida.
        io.to(`room-${idLine}`).emit('update-view', parseStation(estacion));
        //devolviendo un mensaje de exito.
        return chalk.green(`[COMPLETO]: Actualizacion completada en linea ${idLine}.`);
    }
};
/**
 * Permite imprimir dentro de un "for" asincrono para evitar sobresaturar la
 * terminal
 * @param {*} params
 */
function asyncLog(params) {
    setInterval(() => {
        console.log(params);
    }, 3000)
}
/**
 * Transforma la estacion que se obtiene para una mejor compatibilidad entre el
 * front y el back
 * @param  station la estacion en formato Station
 */
function parseStation(station) {
    const way1 = station.data[0];
    const way2 = station.data[1];
    let way1Info = way1.info;
    let way2Info = way2.info;
    if (way1Info.length != 0 || way2Info.length != 0) {
        way1Info.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        way2Info.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        const way1LastInfo = way1Info[0];
        const way2LastInfo = way2Info[0];
        const obj = {
            name: station.name,
            idLine: station.idLine,
            data: [{
                    way: way1.way,
                    date: way1LastInfo.date,
                    crowdPercent: way1LastInfo.crowdPercent
                },
                {
                    way: way2.way,
                    date: way2LastInfo.date,
                    crowdPercent: way2LastInfo.crowdPercent
                }
            ]
        };
        return obj;
    } else {
        const obj = {
            name: station.name,
            idLine: station.idLine,
            data: [{
                    way: way1.way
                },
                {
                    way: way2.way
                }
            ]
        };
        return obj;
    }
}
module.exports = stationCtrl;