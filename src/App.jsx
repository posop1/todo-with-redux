import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { addTodo } from './redux/slices/todoSlice'
import './styles/app.scss'

const App = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAction = () => {
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className="App">
      <h1 className="logo">TodoList</h1>
      <TodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />

      <TodoList />
    </div>
  )
}

export default App
