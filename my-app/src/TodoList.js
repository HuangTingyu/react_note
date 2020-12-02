import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue:""
    }
  }

  render() {
    return (<div>
      <section>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
      </section>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <TodoItem key={index} content={item}></TodoItem>
            // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
          })
        }
      </ul>
    </div>)
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
