
var express = require('express');
var app = express();
var fs = require('fs');

app.use(function (req,res,next) {
    res.sendError = function () {
        res.stateCode = 500;
        res.end('服务器错误')
    }
    next();
});

app.get('/', function (req,res) {
    res.sendFile('index.html',{root:__dirname});
});

/*
 *  希望浏览器发现本地有缓存的话就干脆不发请求了
 * */

app.get('/index.js', function (req,res) {
    console.log('访问服务器')
    //设置缓存有效时间
    var expires = new Date(Date.now()+1000*10);
    //res.setHeader('Expires',expires.toUTCString())
    res.setHeader('Cache-Control','max-age=10');
    fs.createReadStream('./index.js').pipe(res)
});

app.listen(9090);