import { all, takeLatest, put, select } from "redux-saga/effects";
import { uuid } from "uuidv4";

import { setTodosList } from "./actions";
import * as TodoTypes from "./types";

function* addTodo({ payload }) {
  const newTodo = {
    id: uuid(),
    message: payload.todoMessage,
    done: false,
  };
  const todoList = yield select((state) => state.todo.present);
  console.log(todoList, "oiii");
  const newTodosList = [newTodo, ...todoList];
  console.log(newTodosList, "hahah");
  yield put(setTodosList(newTodosList));
}

function* deleteTodo({ payload }) {
  const todoList = yield select((state) => state.todo);
  const TodoList = todoList.filter((todo) => todo.id !== payload.id);
  yield put(setTodosList(TodoList));
}

function* editTodoStatus({ payload }) {
  const todoList = yield select((state) => state.todo);
  const { todo } = payload;
  const newTodo = {
    id: todo.id,
    message: todo.message,
    done: !todo.done,
  };

  const TodoList = todoList.map((todo) => {
    if (todo.id === newTodo.id) {
      return newTodo;
    }
    return todo;
  });

  yield put(setTodosList(TodoList));
}

export default all([
  takeLatest(TodoTypes.ADD_TODO, addTodo),
  takeLatest(TodoTypes.DELETE_TODO, deleteTodo),
  takeLatest(TodoTypes.EDIT_TODO_STATUS, editTodoStatus),
]);
