/*
* 1.渲染的组件有且只有一个顶级标签
* */
//声明一个普通的数组
var names = ['张龙','赵虎','王朝','马汉'];
var style = {color:'#fff'}
ReactDOM.render(
    //有且只能有一个顶级元素(div),没有不行
    <div>
        {  //遇到{}以js语法来进行解析
            names.map(function (item,index) {
                return <div key={index} className="pink" style={style}>{item}</div>
            })
        }
    </div>,
    document.querySelector('#app')
);