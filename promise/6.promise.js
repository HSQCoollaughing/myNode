var fs = require('fs');
var Promise = require('./Promise');

function readFile(filename){
    /*
    * promise实例最开始是unfulfilled  初始态
    * resolve方法 会把状态变为成功态  fulfilled
    * reject方法 会把状态变为失败态  failed
    * notify 不会修改状态
    * */
    return new Promise(function (resolve,reject,notify) {
        var rs = fs.createReadStream(filename,{highWaterMark:1});//最高水位线，每次读取的字节数

        var result='';
        rs.setEncoding('utf8');

        rs.on('data', function (data) {
            notify(data);
            result+=data;
        });

        rs.on('end', function () {
            resolve(result);
        });

        rs.on('error', function (err) {
            reject(err);
        })
    });


}

readFile('./1.txt').then(function (data) {
    console.log('成功了',data)
}, function (err) {
    console.log('失败',err)
}, function (data) {
    console.log('进展中',data)
});