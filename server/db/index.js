const mongoose = require('mongoose')
console.log(`Reached here 1`)
mongoose
    .connect('mongodb://127.0.0.1:27017/signup', { useNewUrlParser: true })
    .catch(e => {
        console.log(`Reached here 2`)
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db