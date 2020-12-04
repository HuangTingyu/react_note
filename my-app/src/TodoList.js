import React from 'react'
import TodoItem from './TodoItem'
import TestProps from './testProps'

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
    return (<div>
      <section>
        <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
        <button onClick={this.handleBtnClick}>add</button>
      </section>
      <ul>
        {
          this.handleTodoItems()
        }
      </ul>
      <TestProps content={ this.state.inputValue}></TestProps>

    </div>)
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
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
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
