var express = require('express');
var app = express();

app.get('/jsonp', function (req,res) {
    var wd = req.query.wd;      //得到关键字
    var cb = req.query.cb;      //得到回调函数方法名
    var result = {q:wd,p:false,s:[]};

    for(var i=0;i<10;i++){
        result.s.push(wd+i);
    }
    res.setHeader('Access-Control-Allow-Origin:*');
    res.send(`${cb}(${JSON.stringify(result)})`);

});

app.listen(9090);