const mongoose = require('mongoose');
const { Schema } = mongoose;

const StationSchema = new Schema({
    name: { type: String, required: true },
    idLine: { type: Number, required: true },
    order: { type: Number, required: true },
    data: [{
        way: { type: String, required: true },
        info: [{ type: Schema.Types.ObjectId, ref: 'Info', default: [], required: true }],
    }]
});

module.exports = mongoose.model('Station', StationSchema);