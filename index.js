var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('hiben');
  res.end();
}).listen(8085);
