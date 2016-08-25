var Double = React.createClass({
    getInitialState(){
        return {value:''}
    },
    handle(event){
        //取得当前事件源的值，赋给状态对象的value属性
        this.setState({value:event.target.value})
    },
    render(){
        //defaultValue
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handle}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Double/>,
    document.querySelector('#app2')
);