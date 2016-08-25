function ajax(url,type,data,processData,jsonp,dataType,context,success){
    var xhr = new XMLHttpRequest();
    url+='?';       //http://localhost:9090/?
    var params='';
    if(processData){
        for(var attr in data){
            params += (attr+'='+data[attr]);        //wd=a
        }
    }else{
        url+=data;
    }

    url+=params;                //http://localhost:9090/?wd=a
    url + = ('&'+jsonp+'=jQuery_'+Date.now());        //http://localhost:9090/?wd=a&cb=Jquery_1232132143
    xhr.open(type,url,true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && /2\d{2}/.test(xhr.status)){
            console.log(xhr.responseText);

            var response = xhr.responseText.slice(xhr.responseText.indexOf('(')+1,xhr.responseText.length-1);
            var jsonObj = JSON.parse(response);
            success.bind(context)(jsonObj);
        }
    }
    xhr.send();
}



var Sug = React.createClass({
    getInitialState(){
        return {item:[]}
    },
    handle(event){
        //获取文本框内容，并且调用百度的接口，获取结果显示列表
        var inp = event.target.value;
        $.ajax({
            url:'http://localhost:9090/jsonp',
            //url:'http://www.baidu.com/su',
            type:'GET',
            data:{wd:inp},      //要传递的参数对象
            dataType:'jsonp',
            processData:true,   //为true表示会把参数对象序列化成查询字符串追加到url后面
            jsonp:'cb',
            context:this,       //指定回调中的this指针
            success:function(data){
                var res = data.s;

                res = res.map( (item,index) => <li className="list-group-item" key={index}>{item}</li> );
                this.setState({item:res})
            }
        })
    },
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <input type="text" className="form-control" onChange={this.handle}/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.item}
                    </ul>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Sug />,
    document.querySelector('#app')
);