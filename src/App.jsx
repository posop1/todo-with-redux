import React, { useState } from 'react'
import './styles/app.scss'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = (e) => {
    if (text.trim().length) {
      e.preventDefault()
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
            <input type="checkbox" />
            <span>{todo.text}</span>
            <span style={{ color: 'red' }}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
