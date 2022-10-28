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
        className={styles.todo__input}
      />
      <button
        onClick={handleSubmit}
        className={styles.todo__btn}
      >
        add todo
      </button>
    </label>
  )
}

export default TodoForm
