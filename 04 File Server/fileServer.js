var http = require('http');
var fs = require('fs');

var app = http.createServer(function (req, res) {
    fs.readFile('./index.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  });
app.listen(3000);

console.log(" Server dang chay tai : http://localhost:3000/ ");