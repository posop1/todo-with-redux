import React from 'react'
import styles from './TodoItem.module.scss'

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={styles.TodoItem}>
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
  )
}

export default TodoItem
