var Person = React.createClass({
    getInitialState(){
        //返回初始状态，默认属性happy为true
        return {happy:true}
    },
    handle(){       //点击按钮时执行此方法
        this.setState({happy:!this.state.happy})
    },
    render(){
        //this.state.happy可以获得状态对象
        var heart = this.state.happy?'开心':'不开森';
        return (
            <div>
                {this.props.name}{heart}
                <button onClick={this.handle}>改变一下</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Person name="福原爱"></Person>,
    document.querySelector('#app')
)