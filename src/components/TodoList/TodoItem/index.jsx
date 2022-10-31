import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../../redux/slices/todoSlice'
import styles from './TodoItem.module.scss'

const TodoItem = ({ id, text, comleted }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.TodoItem}>
      <div className={styles.todo__container}>
        <input
          type="checkbox"
          checked={comleted}
          onChange={() => dispatch(toggleTodo({ id }))}
        />
        <span>{text}</span>
      </div>
      <div>
        <BsFillTrashFill
          className={styles.delete}
          onClick={() => dispatch(removeTodo({ id }))}
        />
      </div>
    </div>
  )
}

export default TodoItem
