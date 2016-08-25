var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-primary">
                <PanelHead></PanelHead>
                <PanelBody></PanelBody>
                <PanelFooter></PanelFooter>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">面板头部</div>
        )
    }
});

var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                面板主体
            </div>
        )
    }
});

var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">面板尾部</div>
        )
    }
});

ReactDOM.render(
    <Panel></Panel>,
    document.querySelector('#app')
)