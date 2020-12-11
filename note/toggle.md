### 显示隐藏切换

`src\App.js`

```js
import React, { Component, Fragment } from 'react'
import './css/App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:true
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.show?'show':'hide'}>APP</div>
                <button onClick={ this.handleToggle }>toggle</button>
            </Fragment>
        )
    }
    handleToggle() {
        this.setState({
            show: this.state.show? false:true
        })
    }
}

export default App
```

`src\css\App.css`

```
.show {
  opacity: 1;
  transition: all 1s ease-in;
}

.hide {
  opacity: 0;
  transition: all 1s ease-in;
}

```

`transition: all 1s ease-in;` 可以给个渐隐渐显的动画效果。

### 更详细的设置

`src\css\App.css`

```css
.show {
  animation: show-item 2s ease-in forwards;
}

.hide {
  animation: hide-item 2s ease-in forwards;
}

@keyframes show-item {
  0% {
    opacity: 0;
    color: red;
  }
  50% {
    opacity: 0.5;
    color: green;
  }
  100% {
    opacity: 1;
    color: blue;
  }
}

@keyframes hide-item {
  0% {
    opacity: 1;
    color: red;
  }
  50% {
    opacity: 0.5;
    color: green;
  }
  100% {
    opacity: 0;
    color: blue;
  }
}
```

`animation: show-item 2s ease-in forwards;`

show-item设置动画

`2s` 动画时间

`ease-in ` 生成速度的曲线

forwards是为了将最后一帧作为最终的样式。