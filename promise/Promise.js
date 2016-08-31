class Promise {
    //构造函数一般用来初始化私有变量
    constructor(fn){
        this._status = 'unfulfilled';
        var resolve = (data)=>{
            if(this._status == 'unfulfilled'){
                this._status = 'fulfilled';
                this._fulfilledHandler(data);
            }

        };

        var reject = (err)=>{
            if(this._status == 'unfulfilled'){
                this._status = 'failed';
                this._errorHandler(err);
            }
        };

        var notify = (data)=>{
            this._progressHandler(data);
        };

        fn(resolve,reject,notify);
    }
    then(fulfilledHandler,errorHandler,progressHandler){
        this._fulfilledHandler = fulfilledHandler;
        this._errorHandler = errorHandler;
        this._progressHandler = progressHandler;
    }
}

module.exports = Promise;


















