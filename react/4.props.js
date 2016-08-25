var Person = React.createClass({
    //定义属性的名称和类型以及约束
    propTypes:{
        name:React.PropTypes.string.isRequired,
        gender:React.PropTypes.string.isRequired
    },
    //获取默认属性对象
    getDefaultProps(){
        return {name:'无名氏',gender:'女'}
    },
    //用来指定如何渲染此组件
    render(){
        //props是当前组件属性的集合
        return (
            <h1>{this.props.name}
                {this.props.gender}
            </h1>
        )
    }
});
//如果属性特别多，可以解构赋值
var attr = {
    name:"谌龙",
    gender:"男"
}

//把一个Person实例渲染到app元素内部
ReactDOM.render(
    <Person {...attr} />,
    document.querySelector('#app2')
);