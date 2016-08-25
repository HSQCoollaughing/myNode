var myFn = function () {
    setTimeout(function () {
        console.log('log1');
        setTimeout(function () {
            console.log('log2');
            setTimeout(function () {
                console.log('log3')
            },3000)
        },1000)
    },2000)  
};

myFn()