import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles/app.scss'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          comleted: false
        }
      ])
      setText('')
    }
  }
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }
  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo

        return {
          ...todo,
          comleted: !todo.comleted
        }
      })
    )
  }

  return (
    <div className="App">
      <h1 className="logo">TodoList</h1>
      <TodoForm
        text={text}
        handleInput={setText}
        handleSubmit={addTodo}
      />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  )
}

export default App
