import React, { Component,Fragment } from 'react'
import { Input, Button, List  } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}}/>
                <Button type="primary">Add</Button>
                <List style={{marginTop: "10px", width: "300px"}}
                    bordered
                    dataSource={data}
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