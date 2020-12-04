### 生命周期

### `init`

组件生成

`componentWillMount` => render => `componentDidMount`

### `update`

组件刷新

`shouldComponentUpdate` => `render`

return false 为禁止刷新页面

```
shouldComponentUpdate(newProps, newState) {
    return true;
  } 
```

