var mix = {
    getInitialState(){
        return {count:0}
    },
    handle(){
        this.setState({count:this.state.count+1})
    }
}
var Counter1 = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div>
                {this.state.count}
                <button onClick={this.handle}>点我加1</button>
            </div>
        )
    }
});

var Counter2 = React.createClass({
    mixins:[mix],
    render(){
        return (
            <div>
                {this.state.count}
                <button onClick={this.handle}>点我加1</button>
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
    </div>,
    document.querySelector('#app')
);