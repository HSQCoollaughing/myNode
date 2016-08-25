let promise = new Promise( (resolve,reject) => {
    setTimeout( () => {
        if(Math.random() > 0.5){
            resolve('This is resolve');
        }else{
            reject('This i reject');
        }
    },1000)
});

promise.then();