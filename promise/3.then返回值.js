new Promise(function (resolve,reject) {
    console.log('这是第一次');
    setTimeout(resolve,3000)
}).then(function () {
    console.log('这是第二次');
    return '字符串'
}).then(function (arg) {
    console.log('这是第三次'+arg);
})