const mongoose = require('mongoose')

mongoose
    .connect('mongodb://mongodb:27017/signup', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db