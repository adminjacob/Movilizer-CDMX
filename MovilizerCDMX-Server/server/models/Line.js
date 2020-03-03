const mongoose = require('mongoose');
const { Schema } = mongoose;

const LineSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    from_to: { type: String, required: true }
});

module.exports = mongoose.model('Line', LineSchema);