import React, { Component,Fragment } from 'react'
import { Input, Button, List } from 'antd';
import store from '../store/index.js'


class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
    }
    render() {
        return (
            <Fragment>
                <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}}/>
                <Button type="primary">Add</Button>
                <List style={{marginTop: "10px", width: "300px"}}
                    bordered
                    dataSource={[]}
                    renderItem={item => (
                        <List.Item>
                           {item}
                        </List.Item>
                    )}
                />
            </Fragment>
            
            
        )
    }
}

export default TodoList