var http = require('http');
var app=require('./app')

http.createServer(app.handelRequest).listen(8000);









/*  //render html form the server
    var fs = require('fs');
    function onRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function (error, data) {
      if (error) {
        response.writeHead(404); response.write("file not found!");
      } else {
        response.write(data);
      } response.end();
    });
    // response.end();
    }*/
