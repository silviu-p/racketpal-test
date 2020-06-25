const mongoose = require('mongoose');
const EngineerSchema = require('../schemas/engineer.schema');

const Engineer = mongoose.model('Engineers', EngineerSchema);

module.exports = Engineer;