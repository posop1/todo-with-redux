import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './TodoItem.module.scss'

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={styles.TodoItem}>
      <div className={styles.todo__container}>
        <input
          type="checkbox"
          checked={todo.comleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </div>
      <div>
        <BsFillTrashFill
          className={styles.delete}
          onClick={() => removeTodo(todo.id)}
        >
          &times;
        </BsFillTrashFill>
      </div>
    </li>
  )
}

export default TodoItem
