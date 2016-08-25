var Board = React.createClass({
    getInitialState(){
        return {msg:this.props.msg}
    },
    handle(event){
        event.preventDefault();
        var val = this.refs.txt.value;
        this.state.msg.push(val);
        localStorage.setItem('msg',JSON.stringify(this.state.msg));
        this.setState({msg:this.state.msg}, function () {
            this.refs.txt.value = '';
        });

    },
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <form>
                        <div className="form-group row">
                            <div className="col-xs-10"><input type="text" ref="txt" className="form-control"/></div>
                            <div className="col-xs-2"><button className="btn btn-primary" onClick={this.handle}>留言</button></div>
                        </div>
                    </form>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.msg.map((item,index) => <li className="list-group-item" key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
});

var msg = localStorage.getItem('msg');
msg = msg?JSON.parse(msg):[];

ReactDOM.render(
    <Board msg={msg} />,
    document.querySelector('#app2')
);

//localStorage是window全局变量
//设置setItem(key,value)  getItem(key)