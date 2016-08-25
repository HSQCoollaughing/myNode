var Person = React.createClass({
    //用来指定如何渲染此组件
    render(){
        //props是当前组件属性的集合
        return (
            <h1>{this.props.name}</h1>
        )
    }
});

//把一个Person实例渲染到app元素内部
ReactDOM.render(
    <Person name="谌龙"/>,
    document.querySelector('#app2')
);