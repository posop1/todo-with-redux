import React from 'react'
import styles from './TodoForm.module.scss'

const TodoForm = ({ text, handleInput, handleSubmit }) => {
  return (
    <label className={styles.form}>
      <input
        type="text"
        placeholder="text..."
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>add todo</button>
    </label>
  )
}

export default TodoForm
