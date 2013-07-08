var express = require('express');

var app = express.createServer(express.logger());

// My addtions
// var newText = fs.readFile("index.html");
// var newText = buf.toString(newText);
//

var newText = "";

app.get('/', function(request, response) {
  response.send('Hello World 2!' + newText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
