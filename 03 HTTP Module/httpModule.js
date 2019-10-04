var http = require('http');

var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
  });
app.listen(3000);

console.log(" Server dang chay tai : http://localhost:3000/ ");