const express = require('express')
const cors = require('cors')

require('dotenv').config({ path: require('find-config')('.env') })
const db = require('./db')
const attendeeRouter = require('./routes/attendee-router')

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())


//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api', attendeeRouter)

app.use('/', express.static('../client/build')).use(cors())
app.use(express.static('../client/build')).use(cors())

app.all('/*', (req, res) => {
	// res.status(201).json({message: "nothing here!"});
	res.sendFile(path.resolve("../client/build/index.html"));
});

app.listen(process.env.PORT || apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = app;
