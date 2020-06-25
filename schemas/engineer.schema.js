const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EngineerSchema = new Schema({
    name: String
});

module.exports = EngineerSchema;