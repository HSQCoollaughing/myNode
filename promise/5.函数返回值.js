/*
function ajaxPromise(url){
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4 && /2\d{2}/.test(xhr.status)){
                resolve(xhr.responseText);
            }else{
                reject(xhr.responseText);
            }
        }
        xhr.send();
    })
}

ajaxPromise('www.baidu.com')
    .then(value => {
        console.log(value)  
    })
    .catch( err => {
        console.log(err)
    })*/


function ajaxPromise(url){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4){
                if(xhr.status==200){
                    resolve('abc');
                }else{
                    reject(xhr.responseText);
                }

            }
        };
        xhr.send();
    })
}

ajaxPromise('http://www.baidu.com').then(function (value) {
    console.log(value)
})