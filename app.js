
var express = require('express'),
app = express(),
port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/src/main/resources/public'));
app.listen(port);