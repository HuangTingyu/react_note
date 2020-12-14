import React, { Component,Fragment } from 'react'
import { Input, Button, List } from 'antd';
import store from '../store/index.js'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    render() {
        return (
            <Fragment>
                <Input value={this.state.inputValue} placeholder="Basic usage" style={{ width: "300px", marginRight: "10px" }} onChange={ this.handleInputChange } />
                <Button type="primary">Add</Button>
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
    
}

export default TodoList