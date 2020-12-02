import React from 'react'

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
            return <li key={index}>{item}</li>
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
}

export default TodoList;
