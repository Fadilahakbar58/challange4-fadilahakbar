const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../public/'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});
app.get('/cars', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/cars.html'));
});
app.listen(3008);
console.log('Now the server is running in url: http://127.0.0.1:3008');
