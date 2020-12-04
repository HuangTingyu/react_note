### 参考

 https://reactjs.org/docs/typechecking-with-proptypes.html 

### props, state与render的关系

当组件的state或者props发生改变的时候，render函数会重新执行

测试

`src\TodoList.js`

```
<TestProps content={ this.state.inputValue}></TestProps>
```

`src\testProps.js`

```javascript
import React from 'react'

class TestProps extends React.Component { 

    render() {
        return <div>{ this.props.content}</div>
    }
}

export default TestProps; 
```

此时页面上会同步，输入框输入的内容

![props](.\img\props.png)

### props类型校验

子组件中，添加类型校验

`src\TodoItem.js`

```js
TodoItem.propTypes = {
    content: PropTypes.string,
    delete: PropTypes.func,
    index: PropTypes.number
}
```

### 强制要求参数传入

加上 `.isRequired`

```
TodoItem.propTypes = {
    test: PropTypes.string.isRequired
    .......
    }
```

### 定义默认值

如果没传，就会自动填入默认值

```
TodoItem.defaultProps = {
    test : 'testDefaultProps'
}
```

### 定义多种类型

此时content可以是string，也可以是number

```javascript
TodoItem.propTypes = {
    content:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
```

