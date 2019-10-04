var url = require('url');
var addr = 'http://localhost:3000/default.htm?year=2017&month=february';
var a = url.parse(addr,true);
// Log ra cac thong tin cua path
console.log(a.host); 
console.log(a.pathname); 
console.log(a.search); 

var data = a.query;
console.log(data.month);