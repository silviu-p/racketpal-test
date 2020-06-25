const config = {
    server: {
        port: 3000
    },
    mongo: {
        URL: "mongodb://localhost:27017",
        database: "racketpal"
    },
    rules: {
        timeframe: "weeks",
        quantity: 2,
        shifts: "half"
    }
}

module.exports = config;