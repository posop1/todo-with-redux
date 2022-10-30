/* eslint-disable space-before-function-paren */
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [{ id: 1, text: 'asd', completed: false }]
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        comleted: false
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id)
      toggledTodo.completed = !toggledTodo.completed
    }
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
