var http = require('http');

var app = http.createServer(function(err,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
});
app.listen(3000);