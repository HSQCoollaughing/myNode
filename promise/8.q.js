//这是一个js版的promise实现
var q = require('q');
var fs = require('fs');

function readFile(filename){
    var defer = q.defer();
    fs.readFile(filename,'utf8', function (err,data) {
        if(err){
            defer.reject(err)
        }else{
            defer.resolve(data)
        }
    })
    return defer.promise;
}

readFile('./1.txt').then(function (data) {
    console.log(data);
})