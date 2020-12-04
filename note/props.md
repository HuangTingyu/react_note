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

