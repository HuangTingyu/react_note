### React样式

### 行内样式

```
<button onClick={this.handleBtnClick} 
style={{ background: "#ff0000", border:"solid 1px #00ff00"}}>add</button>
```

注意，style= 的最内层括号，表示的是一个对象！

### 外联样式

把样式写在 `xxx.css` 中

```
import '../css/TodoList.css'
<button onClick={this.handleBtnClick} className="red_btn">add</button>
```

