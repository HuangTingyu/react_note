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

