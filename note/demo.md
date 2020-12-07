### 简单的demo

`src\index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

`src\App.js`

```
import React from 'react'

class App extends React.Component{
  render() {
    return (<div>hello hello</div>)
  }
}

export default App;
```

### JSX

此处的html结构没有报错，因为这是基于JSX语法

可以直接在react中直接使用html标签不用加引号

例如上述的

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

以及

```
class App extends React.Component{
  render() {
    return (<div>hello hello</div>)
  }
}
```

JSX中也可以写JS表达式，只需要用花括号

```
class App extends React.Component{
  render() {
    return (<div>
      {1+2}
      hello hello
    </div>)
  }
}
```

ps.只能写表达式，不能写一坨if...else语句

![demo01](.\img\demo01.png)

### TodoList

数据部分

```js
import React from 'react'
class TodoList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue:""
    }
  }
  ......
}
export default TodoList;
```

定义方法

```js
class TodoList extends React.Component{
  ......

  render() {
    return (<div>
      <section>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
      </section>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>)
  }
  handleBtnClick() {
    this.setState({
        // 保存原来的值，顺便塞新的值
      list: [...this.state.list, this.state.inputValue],
        // input框清空
      inputValue:""
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList;
```

绑定方法，

- 注意点1，要改变this指向

```
onClick={this.handleBtnClick.bind(this)
```

- 注意点2，改数据的时候要使用`this.setState` 方法 ！！

不要直接`this.state.list`一通操作，会报错de。

- 注意点3，li标签记得绑上key值，不然会有warning

- 注意点4，input框清空

```js
  handleBtnClick() {
    this.setState({
        // 保存原来的值，顺便塞新的值
      list: [...this.state.list, this.state.inputValue],
        // input框清空
      inputValue:""
    })
  }
```

html部分，input框的value绑定state中的数据

```
<input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
```

### constructor

为了方便函数中，可以快速获取到this，并且同时保证，`this` 的绑定只会绑定一次且不会频繁触发子组件的渲染。可以在 `constructor` 中添加

```js
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    ......
   }
```



### 添加删除操作

```js
 class TodoList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue:""
    }
  }
 render() {
    return (
    ......
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
          })
        }
      </ul>
    )
  }
  handleItemClick(index) {
    // 建议不要直接操作 this.state.list
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
}
```

### 父组件传给子组件

`src\TodoList.js`

父组件通过属性的形式，向子组件传递参数

`<TodoItem content={item}></TodoItem>`

```js
{
          this.state.list.map((item, index) => {
            return <TodoItem content={item}></TodoItem>
          })
}
```

子组件通过props接收

`this.props.content`

`this.props.index`

`src\TodoItem.js`

```js
import React from 'react'

class TodoItem extends React.Component{ 
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleDelete}>{ this.props.content}</div>
        )
    }
    handleDelete() {
        console.log(this.props.index)
    }
}

export default TodoItem;
```

### 子组件向父组件传递

父组件传递函数给子组件

`<TodoItem delete={this.handleDelete}
          key={index}
          content={item}
          index={index}
        ></TodoItem>`

```js
render() {
	return (<div>
      <section>
        <input value={this.state.inputValue} onChange={this.handleInputChange}>		         </input>
        <button onClick={this.handleBtnClick}>add</button>
      </section>
      <ul>
        {
          this.handleTodoItems()
        }
      </ul>
    </div>)
 )
}
  handleTodoItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem delete={this.handleDelete}
          key={index}
          content={item}
          index={index}
        ></TodoItem>
      )
      // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
    })
  }
 handleDelete(index) {
    // 建议不要直接操作 this.state.list
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
```

子组件直接调用父组件传过来的方法

`this.props.delete`

```js
import React from 'react'

class TodoItem extends React.Component{ 
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleDelete}>{ this.props.content}</div>
        )
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }
}

export default TodoItem;
```

