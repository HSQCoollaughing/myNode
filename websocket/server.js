var express = require('express');
var app = express();

app.get('/clock', function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(new Date().toLocaleString())
});


app.listen(9090);