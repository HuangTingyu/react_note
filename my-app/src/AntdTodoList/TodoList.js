import React, { Component,Fragment } from 'react'
import { Input, Button, List } from 'antd';
import store from '../store/index.js'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        // 订阅store改变，只要store改变，就会执行handleStoreChange
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <Input value={this.state.inputValue} placeholder="Basic usage" style={{ width: "300px", marginRight: "10px" }} onChange={ this.handleInputChange } />
                <Button type="primary" onClick={this.handleBtnClick}>Add</Button>
                <List style={{marginTop: "10px", width: "300px"}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                           {item}
                        </List.Item>
                    )}
                />
            </Fragment>
            
            
        )
    }
    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action) 
    }
    
}

export default TodoList