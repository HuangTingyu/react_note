import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    render() {
        console.log("child render")
        return (
            <div onClick={this.handleDelete}>{this.props.test}{this.props.content}</div>
        )
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }

    // componentWillReceiveProps() {
    //     console.log("child componentWillReceiveProps")
    // }

    // componentWillUnmount() {
    //     console.log("child componentWillUnmount")
    // }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    delete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test : ''
}

export default TodoItem;