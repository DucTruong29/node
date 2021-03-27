var http = require('http');
var cal = require('./cal.js');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'})
    var kq = cal.tinhTong(5,6);
    response.end('Hello, This is my world');
}).listen(8181);