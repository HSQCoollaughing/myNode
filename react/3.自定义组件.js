/*
* 1. 组件的名称首字母大写
* */
var Msg = React.createClass({
    render(){
        //能且只能返回一个顶级标签
        //样式和行为都定义在组件内部
        return <div><h2 style={{color:'red'}}>Hello world</h2></div>
    }
});

ReactDOM.render(
    <Msg/>, //此处可以像使用普通的DOM元素一样使用Msg组件
    document.querySelector('#app')
);

ReactDOM.render(
    <Msg/>, //此处可以像使用普通的DOM元素一样使用Msg组件
    document.querySelector('#app2')
);