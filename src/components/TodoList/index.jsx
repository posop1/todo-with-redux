import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styles from './TodoList.module.scss'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos)

  return (
    <ul className={styles.TodoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  )
}

export default TodoList
