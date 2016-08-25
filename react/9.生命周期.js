var Counter = React.createClass({
    //加载前
    //获取默认属性    返回一个对象，对象的属性会合并到this.props
    getDefaultProps(){
        console.log('1.获取默认属性 getDefaultProps');
        return {count:1}
    },
    //定义初始状态  返回一个对象    状态可以从属性中获取
    getInitialState(){
        console.log('2.定义初始状态')
        return {count:2}
    },
    componentWillMount(){
        console.log('3.将此组件渲染到页面上')
    },
    componentDidMount: function () {
        console.log('4.渲染');
    },
    handleClick(){
        this.setState({count:this.state.count+1})
    },
    shouldComponentUpdate(){
        if(this.state.count>=10){
            return false;
        }else{
            return true;
        }
    },
    componentWillUpdate(){

    },
    render(){
        console.log('4.渲染到界面上 render');
        return (
            <div>
                {this.props.name}:{this.state.count}
                <button onClick={this.handleClick}>加1</button>
            </div>
        )
    },
    componentDidMount(){
        console.log('5.')
    }
});

ReactDOM.render(
    <Counter name="数字"/>,
    document.querySelector('#app')
);