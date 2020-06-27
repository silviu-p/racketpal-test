const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment');
const cors = require('cors');

const EngineerModel = require('./models/engineer.model');
const HistoryModel = require('./models/history.model');

const app = express();


// Mongoose package Database connection

mongoose.connect(`${config.mongo.URL}/${config.mongo.database}`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to database!');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('support-wheel-of-fate/src'));
app.use(cors());

app.get('/get-engineers', (req, res, next) => {
    EngineerModel.find().then(engineers => {
        res.send(engineers);
    })
});

app.get('/valid-engineers', (req, res) => {
    let end = moment().subtract(config.rules.quantity, config.rules.timeframe);
    HistoryModel.find({ lastActiveAt: { $lte: end } }).select('engineer')
    .populate('engineer')
    .exec()
    .then(results => {
        let validEngineers = [];
        results.forEach(result => {
            validEngineers.push(JSON.stringify(result.engineer));
        });
        let unique = [...new Set(validEngineers)];
        console.log('Data type in set: ', typeof(unique[1]));
        res.send(unique);
    })
    .catch(err => console.log(`Ooopsie, error: ${err}`));
    // res.send('Valid engineers from backend');
})

app.post('/add-engineer', (req, res, next) => {
    const engineer = new EngineerModel(req.body);
    console.log(`Received engineer via request is: ${engineer}`);
    engineer.save().then((err, success) => {
        if (err) {
            console.log(`Error saving engineer: ${err}`);
        } else {
            console.log('Engineer saved', success);
            res.send('Engineer saved: ');
        }
    });
});

app.post('/add-history', (req, res, next) => {
    const history = new HistoryModel(req.body);
    console.log(`Received history via request is: ${history}`);
    history.save().then((err, success) => {
        if (err) {
            console.log(`Error saving history: ${err}`);
        } else {
            console.log('History saved', success);
            res.send('History saved: ', history);
        }
    });
});

app.listen(config.server.port, () => console.log(`Express is listening on port ${config.server.port}`));