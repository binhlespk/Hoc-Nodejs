var http = require('http');

var module = require('./mymodule');
var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Data is : " + module.myDateTime());
    res.end();
  });
app.listen(3000);

console.log(" Server dang chay tai : http://localhost:3000/ ");

