/*
* 摘要算法也叫哈希算法
* 将任意长度的输入转变成固定长度的输出
* */

var crypto = require('crypto');
//console.log(crypto.getHashes());
var fs = require('fs');
var rs = fs.createReadStream('./1.txt');
var md5 = crypto.createHash('md5');

rs.on('data', function (data) {
    md5.update(data);
});

rs.on('end', function () {
    console.log(md5.digest('hex'));
});