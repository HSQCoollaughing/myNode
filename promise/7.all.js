function getP(){
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            var num = Math.random();
            //console.log(num)
            if(true){
                resolve(num)
            }else{
                reject(num)
            }
        },500)
    })
}

var  p1 = getP();
var  p2 = getP();
//静态方法
//all表示所有的promise都是与的关系，全部成功之后才会表示成功并调用回调
//都成功才会执行then的回调
/*Promise.all([p1,p2]).then(function (result) {
    console.log(result);
});*/

/*
* 也接收一个Promise数组，只要有一个promise成功了，就直接调用成功的回调
* */
/*
Promise.race([p1,p2]).then(function (res) {
   console.log(res)
});*/


var obj = {name:'zfpx'};
/*
* 一个promise取模板
* 一个promise取数据
* Promise.resolve 返回一个成功态的promise实例，值就是参数
* */
Promise.all([readTmpl(),Promise.resolve(obj)]).then(function (result) {
    var tmpl = result[0];   //得到模板内容
    var data = result[1];   //得到数据对象


});