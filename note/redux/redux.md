## Redux

`src\store\index.js`

```js
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store;
```

`src\store\reducer.js`

```js
const defaultState = {
	// 在这里添加要存储的数据
    inputValue: "",
    list:[]
}

let reducer = (state = defaultState, action) => {
    return state;
}

// 设置默认值
export default reducer
   
```

### 使用 `store` 

`src\AntdTodoList\TodoList.js`

```js
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    ...
}
```

`render` 中使用

```html
<List style={{marginTop: "10px", width: "300px"}}
                    bordered
                    dataSource={this.state.list}
/>
```

### 修改store

只有一种改法！！！通通这么写！

`src\store\reducer.js`

```js
let reducer = (state = defaultState, action) => {
    if (action.type === "change_input_value") {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    return state;
}
```

首先深拷贝store出来，然后修改新的store，返回。

组件使用reducer，如下 ——

`src\AntdTodoList\TodoList.js`

```js
import store from '../store/index.js'
......
handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
```

### 联动store

`src\AntdTodoList\TodoList.js`

```js
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        // 订阅store改变，只要store改变，就会执行handleStoreChange
        store.subscribe(this.handleStoreChange)
    }
    ......
    handleStoreChange() {
        this.setState(store.getState())
    }
```

