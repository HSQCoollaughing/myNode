
var Promise = function (fn) {
    function resolve(data){
        this.suc(data);
    }

    function reject(err){
        this.fail(err)
    }

    fn(resolve,reject)
};

Promise.prototype.then = function (suc,fail) {
    this.suc = suc;
    this.fail = fail;
};

module.exports = Promise;