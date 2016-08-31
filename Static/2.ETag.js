
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
*  1.第一次当客户端访问服务器的时候，服务器返回最新内容并返回ETag
*
*   etag缺点
*   1.每次都要读取完整的文件，读取文件和加密文件需要时间长
* */

app.get('/index.js', function (req,res) {
    var ifNoneMatch = req.headers['if-none-match'];
    getETag('./index.js', function (md5) {
        if(ifNoneMatch==md5){
            res.statusCode=304;
            res.end()
        }else{
            res.setHeader('ETag',md5);
            //fs.createReadStream('./index.js').pipe(res);
            res.end()
        }

    });
});

function getETag(ele,cb){
    //读取文件内容
    fs.readFile(ele, function (err,data) {
        var md5 = require('crypto').createHash('md5').update(data).digest('hex');
        cb(md5)
    })
}

app.listen(9090);