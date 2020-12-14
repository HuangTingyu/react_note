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

