
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const attendeeRouter = require('./routes/attendee-router')

const app = express()
const apiPort = 3001

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())


//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', attendeeRouter)

if(!module.parent){
    app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
}
module.exports = app.listen(3001);
