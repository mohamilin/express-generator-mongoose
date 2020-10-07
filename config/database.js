require('dotenv').config()
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI_LIVE;

mongoose.connect( URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbMongoo = mongoose.connection;

module.exports = dbMongoo;