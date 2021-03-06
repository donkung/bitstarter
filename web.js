var express = require('express');

var app = express.createServer(express.logger());
fs = require('fs');
var text = fs.readFileSync('index.html').toString('utf-8');

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
