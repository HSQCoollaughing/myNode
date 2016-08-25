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
        console.log('6.询问此组件是否要更新')
        if(this.state.count>=10){
            return false;
        }else{
            return true;
        }
    },
    componentWillUpdate(){
        console.log('7.组件将要更新')
    },
    componentDidUpdate(){
        console.log('8.组件完成更新')
    },
    remove(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#app'))
    },
    render(){
        console.log('4.渲染到界面上 render');
        return (
            <div>
                {this.props.name}:{this.state.count}
                <button onClick={this.handleClick}>加1</button>
                <button onClick={this.remove}>移除</button>
                <br/>
                <SubCounter count={this.state.count} />
            </div>
        )
    },
    componentDidMount(){
        console.log('5.此组件渲染界面后')
    }
});

//子组件
var SubCounter = React.createClass({
    componentWillReceiveProps(){
        console.log('10.子组件将要得到新的属性')  
    },
    shouldComponentUpdate(nextProp,nextState){
        console.log('11.子组件是否更新');

        nextProp.count>=5?false:true;
    },
    render(){
        return (
            <div>
                子组件:{this.props.count}
            </div>
        )
    }
})

ReactDOM.render(
    <Counter name="数字"/>,
    document.querySelector('#app')
);