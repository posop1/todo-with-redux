import React, { useState } from 'react'
import './styles/app.scss'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = (e) => {
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
      <label>
        <input
          type="text"
          placeholder="text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>add todo</button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.comleted}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <span
              className="delete"
              onClick={() => removeTodo(todo.id)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
