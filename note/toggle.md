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



