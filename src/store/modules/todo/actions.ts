import { action } from 'typesafe-actions'
import { TodoTypes, TodoItem } from './types'

export const setTodosList = (todos: TodoItem[]) => action(TodoTypes.SET_TODOS_LIST,{todos})
export const addTodo = (todoMessage: string) => action(TodoTypes.ADD_TODO, { todoMessage })
export const deleteTodo = (id: string) => action(TodoTypes.DELETE_TODO,{ id })
export const editTodoStatus = (todo: TodoItem) => action(TodoTypes.EDIT_TODO_STATUS,{ todo })