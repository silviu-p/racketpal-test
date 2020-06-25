const mongoose = require('mongoose');
const HistorySchema = require('../schemas/history.schema');

const History = mongoose.model('history', HistorySchema);

module.exports = History;