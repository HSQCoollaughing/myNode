//最常用的就是bluebird
var Promise = require('./bluebird');
var fs = require('fs');

//把异步转成同步,可以使用promise方法
var readFileAsync = Promise.promisify(fs.readFile);

//把一个对象上所有的异步方法全部转成promise方法
//var fs = Promise.promisifyAll(fs);

readFileAsync('./1.txt','utf8').then(function (data) {
    console.log(data)
})

