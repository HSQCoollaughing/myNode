/*
* 1.浏览器第一次访问服务器时，服务器返回需要的文件并返回响应头
* 
* */
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
*  如果客户端第二次访问此资源的时候如果发现本地缓存，则会向服务器端确认是否过期
*  请求服务器的时候会发一个If-Modified-Since的请求头到服务器端
* */

app.get('/index.js', function (req,res) {
    var ifModifiedSince = req.headers['if-modified-since'];
    if(ifModifiedSince){
        fs.stat('./index.js', function (err,stat) {
            if(ifModifiedSince == stat.ctime.toUTCString()){
                //304缓存未修改
                res.statusCode=304;
                res.end();
            }else{
                res.setHeader('Last-Modified',stat.ctime.toUTCString());
                fs.createReadStream('./index.js').pipe(res);
            }
        })
    }else{
        //获取上次修改时间
        fs.stat('./index.js', function (err,stat) {
            if(err){
                res.sendError()
            }else{
                res.setHeader('Last-Modified',stat.ctime.toUTCString());
                fs.createReadStream('./index.js').pipe(res);
            }

        })
    }


});

app.listen(9090);