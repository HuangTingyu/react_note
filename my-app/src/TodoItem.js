import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{ 
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleDelete}>{ this.props.test }{ this.props.content}</div>
        )
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    delete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test : 'testDefaultProps'
}

export default TodoItem;