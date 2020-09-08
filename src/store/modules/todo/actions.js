import { action } from "typesafe-actions";
import * as TodoTypes from "./types";

export const setTodosList = (todos) =>
  action(TodoTypes.SET_TODOS_LIST, { todos });
export const addTodo = (todoMessage) =>
  action(TodoTypes.ADD_TODO, { todoMessage });
export const deleteTodo = (id) => action(TodoTypes.DELETE_TODO, { id });
export const editTodoStatus = (todo) =>
  action(TodoTypes.EDIT_TODO_STATUS, { todo });
