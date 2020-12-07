### 生命周期

### `init`

组件生成

`componentWillMount` => `render` => `componentDidMount`

### `update`

组件刷新

`shouldComponentUpdate` => `componentWillUpdate` =>`render` => `componentDidUpdate`

#### `shouldComponentUpdate` 

如果 `shouldComponentUpdate` return false ，后面的链条都不会执行，页面不刷新。

```
shouldComponentUpdate(newProps, newState) {
    return true;
  } 
```

### props

#### `componentWillReceiveProps`

` componentWillReceiveProps ` 要写在有props传入的子组件里面，

子组件第一次出现在父组件中，不会执行；

子组件已经存在于父组件中，同时从父组件接收参数，才会执行。

### 组件移除

`componentWillUnmount`

组件被移除的时候触发。

### 生命周期的应用

可以在子组件中添加

例如，`src\TodoItem.js`

```
shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
```

防止 `input` 框更新时，子组件的render函数反复触发。