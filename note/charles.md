## charles

用来mock数据

### 使用

1. 打开charles，点击Tools，Map Local

2. 添加配置

![](.\img\charles.png)



Local path选择 `.json` 文件，即要返回的数据

3. 发送 `ajax` 请求

`src\TodoList.js`

```js
  componentDidMount() {
        //ajax请求通通写在这里
    console.log('Component DID MOUNT!')
    axios.get('/api/todolist')
      .then((res) => {
        this.setState(() => {
          return {
              // 这样写可以防止，res.data导致list赋值错误
            list: [...res.data]
          }
        })
      }).catch(() => {
      console.log("error")
    })
  }
```

4. 访问地址  http://localhost.charlesproxy.com:3000/ 

可以看到请求列表的 http://localhost.charlesproxy.com:3000/api/todolist 200，请求成功

