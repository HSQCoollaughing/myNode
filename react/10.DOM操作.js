var Focus = React.createClass({
    handle(){
        this.refs.input.focus();
    },
    render(){
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.handle}>得到焦点</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Focus />,
    document.querySelector('#app2')
)