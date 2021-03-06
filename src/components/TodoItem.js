import React, { Component } from 'react'
import Todos from './Todos'
import propTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {'  '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            &times;
          </button>
        </p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todos: propTypes.object.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '4px 4px',
  borderRadius: '30%',
  cursor: 'pointer',
  float: 'right',
}
export default TodoItem
