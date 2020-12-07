import React from 'react'
import TodoItem from './TodoItem'
// import TestProps from './testProps'

class TodoList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue:""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleTodoItems = this.handleTodoItems.bind(this)
  }

  render() {
    console.log('render')
    return (<div>
      <section>
        <input value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input)=>{this.input = input}}
        ></input>
        <button onClick={this.handleBtnClick}>add</button>
      </section>
      <ul ref={(ul)=>{this.ul = ul}}>
        {
          this.handleTodoItems()
        }
      </ul>
      {/* <TestProps content={ this.state.inputValue}></TestProps> */}

    </div>)
  }
  // 组件被挂载到页面后自动执行
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  // 组件被挂在后执行
  componentDidMount() {
     console.log('Component DID MOUNT!')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate")
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  handleTodoItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem delete={this.handleDelete}
          key={index}
          content={item}
          index={index}
        ></TodoItem>
      )
      // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:""
    }, () => {
      console.log(this.ul.querySelectorAll('div'))
    })
    
  }
  handleInputChange(e) {
    // let value = e.target.value 
    let value = this.input.value
    this.setState({
      inputValue: value
    })
  }
  handleDelete(index) {
    // 建议不要直接操作 this.state.list
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
  handleItemClick(index) {
    // 建议不要直接操作 this.state.list
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
}

export default TodoList;
