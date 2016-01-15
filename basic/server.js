// grabbing express
var express = require('express');

// creating express app
var app = express();

// creating a route for the home page
// http://localhost:8080
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

// starting the server on port 8080
app.listen(8080);
// sending a message
console.log('Server has started!');