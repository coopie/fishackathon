
var express = require('express');

var server = express();

var PORT = 1234;
var IPADDRESS = 'localhost';

// server.use('/mandelbrot', express.static(__dirname + '/mandelbrot'));

server.get('/', function(request, response) {

    deliverPage(response, 'main page goes here');

    // where the real page goes
    // map
    // small menu with time options
    // sends request back to /data with params
    // exentuate the rivers (maybe remove other stuff)
});

server.get('/data', function(request, response) {

    deliverPage(response, 'you are looking for: ' + JSON.stringify(request.query, undefined, 4));


});


function deliverPage(response, page) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(page);
    response.end();
}

server.listen(PORT, IPADDRESS, function() {
    console.log('Server listening on port:%s', PORT);
});


// do the r thing every now again
// setInterval(12 *6). ...
