var Family = React.createClass({
    render(){
        return (
            //this.props.children 指的是传入此组件的所有子元素
            <ul>
                {
                    this.props.children.map(function (item,index) {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

ReactDOM.render(
    <Family>
        <span>小黄鸡</span>
        <span>大黄</span>
        <span>胖红</span>
    </Family>,
    document.querySelector('#app2')
)