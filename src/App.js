import React, { Component } from 'react'
import './App.css'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import uuid from 'react-uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Read Novels',
        completed: false,
      },
      {
        id: uuid(),
        title: 'Take coures online',
        completed: false,
      },
      {
        id: uuid(),
        title: 'Work on side project',
        completed: false,
      },
      {
        id: uuid(),
        title: 'Surf the web',
        completed: false,
      },
    ],
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    })
  }
  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    // destructin
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
