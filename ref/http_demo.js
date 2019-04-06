const http = require('http');

//create HTTP server
http.createServer( (request,response) => {
    //write response
    response.write('<h1>Hello World</h1>');
    response.end();
}).listen(5000,() => {console.log('Server is running ...');

});