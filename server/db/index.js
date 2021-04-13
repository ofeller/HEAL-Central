const mongoose = require('mongoose')

require('dotenv').config();
var url = process.env.MONGODB_URI;


mongoose
    .connect(url, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db