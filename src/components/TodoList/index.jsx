import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.module.scss'

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
