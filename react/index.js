/*
ReactDOM是引入react-dom.js之后挂在全局对象下的属性
有一个render方法，负责把一个元素插入到某个DOM元素的内部
* */
ReactDOM.render(
    <h1>Hello</h1>,
    document.querySelector('#app')
)