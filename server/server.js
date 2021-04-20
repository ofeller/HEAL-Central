//Attendees router code and React front end references this article https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
//Authentication implemented with this tutorial https://davidwalsh.name/react-authentication-2
const express = require('express')
const cors = require('cors')
const path = require('path')

require('dotenv').config({ path: require('find-config')('.env') })
const db = require('./db')
const attendeeRouter = require('./routes/attendee-router')

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())


//db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/', express.static(path.join(__dirname, '../client/build')))
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res, next) => {
	res.send('Hello World!')
	next()
})


app.use('/api', attendeeRouter)

app.get('*', (req, res) => {
	// res.status(201).json({message: "nothing here!"});
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});	

app.listen(process.env.PORT || apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = app;
