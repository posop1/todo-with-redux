import React from 'react'
import styles from './TodoForm.module.scss'

const TodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label className={styles.form}>
      <input
        type="text"
        placeholder="text..."
        value={value}
        onChange={(e) => updateText(e.target.value)}
        className={styles.todo__input}
      />
      <button
        onClick={handleAction}
        className={styles.todo__btn}
      >
        Добавить
      </button>
    </label>
  )
}

export default TodoForm
