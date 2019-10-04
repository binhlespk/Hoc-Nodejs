var http = require('http');

var app = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello Binh Le');
});
app.listen(3000);
console.log("Server dang chay tai port: http://localhost:3000/ "); 