new Promise(function (resolve,reject) {
    console.log(Date.now()+' start time1');
    setTimeout(resolve,2000)
}).then(function () {
    console.log(Date.now()+'end time1')
    
    new Promise(function (resolve,reject) {
        console.log(Date.now()+'start time2');
        setTimeout(resolve,3000)
    }).then(function () {
        console.log(Date.now()+'end time2')
    })
});