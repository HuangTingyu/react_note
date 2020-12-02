import React from 'react'

class TodoList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [
        "Todo 1",
        "Todo 2"
      ]
    }
  }

  render() {
    return (<div>
      <section>
        <input></input>
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
      </section>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>)
  }
  handleBtnClick() {
    this.setState({
      list:[...this.state.list, "click"]
    })
  }
}

export default TodoList;
