
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const attendeeRouter = require('./routes/attendee-router')

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

// Specification for http server
var http = require('http'), 
	fs = require('fs'), 
 	url = require('url');

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  	var parsedUrl = url.parse(request.url);

  	/*
    	This request handler should send listingData in the JSON format if a GET request 
    	is sent to the '/listings' path. Otherwise, it should send a 404 error.
    
   */
   
   if (parsedUrl.pathname == '/listings') {
  		response.write(listingData);
  		response.end();
  	} 
  	
  	else {
  		response.writeHead(404, {"Content-Type": "text/plain"});
  		response.write('404, Page Not Found');
  		response.end();
  	}
};

// Server initialization
var server = http.createServer(requestHandler);

fs.readFile('listings.json', 'utf8', function(err, data) {
  	/*
   	This callback function should save the data in the listingData variable, 
    	then start the server. 
   */
   // error and data handling
  	if(err) throw err;
  
  	listingData = data;

	// Start the server
  	server.listen(apiPort, function() {
		console.log('Server listening on: http://127.0.0.1:' + apiPort);   
	});
   
});


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', attendeeRouter)


/*if(!module.parent){
    app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
}*/
module.exports = app.listen(3000);
