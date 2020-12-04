### 获取元素

```
e.target
```

或者 ref

`src\TodoList.js`

```html
 render() {
    return (
<input value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input)=>{this.input = input}}
        ></input>
)
```

然后可以通过

```javascript
handleInputChange(e) {
    // let value = e.target.value 
    let value = this.input.value
    this.setState({
      inputValue: value
    })
  }
```

此时的 `this.input` 相当于 `e.target`

### 警告

尽量不要使用ref去操控页面！

譬如

```js
<button onClick={this.handleBtnClick}>add</button>
<ul ref={(ul)=>{this.ul = ul}}>
        {
          this.handleTodoItems()
        }
      </ul>

handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:""
    })
    console.log(this.ul.querySelectorAll('div'))
  }
```

当点击按钮的时候，会往`ul` 标签中塞入div，但是输出的却是

```
NodeList []
```

### 正确操作

```js
handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:""
    }, () => {
      console.log(this.ul.querySelectorAll('div'))
    })
    
  }
```

这样能确保，`setState` 执行完毕，再执行 `console.log`

因为 `setState` 是个异步函数，所以直接写 `setState` 下面，并不能保证顺序执行代码。

