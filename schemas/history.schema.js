const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    engineer: {type: Schema.Types.ObjectId, ref: 'Engineers'},
    lastActiveAt: Date, 
    shift: Number
});

module.exports = HistorySchema;