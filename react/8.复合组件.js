var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-primary">
                <PanelHead header={this.props.header}></PanelHead>
                <PanelBody body={this.props.body}></PanelBody>
                <PanelFooter footer={this.props.footer}></PanelFooter>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">{this.props.header}</div>
        )
    }
});

var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        )
    }
});

var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">{this.props.footer}</div>
        )
    }
});

var p1={
    header:'面板1的头部',
    body:'面板1的主体',
    footer:'面板1的尾部',
};

var p2={
    header:'面板2的头部',
    body:'面板2的主体',
    footer:'面板2的尾部',
};

ReactDOM.render(
    <Panel {...p1}></Panel>,
    document.querySelector('#app')
);

ReactDOM.render(
    <Panel {...p2}/>,
    document.querySelector('#app2')
);