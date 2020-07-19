import { all, takeLatest, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { uuid } from 'uuidv4'

import { ApplicationState } from '../../index'
import {  setTodosList } from './actions'
import { TodoTypes,  TodoItem } from './types'


function* addTodo({payload}: AnyAction){
    const newTodo = {
        id: uuid(),
        message: payload.todoMessage,
        done: false
    }
    const todoList =  yield select((state: ApplicationState) => state.todo);    
    const newTodosList = [newTodo, ...todoList]
    yield put(setTodosList(newTodosList))
}

function* deleteTodo({ payload }: AnyAction){
    const todoList = yield select((state: ApplicationState) => state.todo)
    const TodoList = todoList.filter((todo: TodoItem) => todo.id !== payload.id)
    yield put(setTodosList(TodoList))
}

function* editTodoStatus({ payload }:AnyAction){
    const todoList = yield select((state: ApplicationState) => state.todo)
    const { todo } = payload;
    const newTodo = { 
                      id: todo.id,
                      message: todo.message,
                      done: !todo.done
                    }

    const TodoList = todoList.map((todo: TodoItem) => {
        if (todo.id === newTodo.id) {
            return newTodo
        }
        return todo
    })

    yield put(setTodosList(TodoList))
}
  
export default all([
    takeLatest(TodoTypes.ADD_TODO, addTodo),
    takeLatest(TodoTypes.DELETE_TODO, deleteTodo),
    takeLatest(TodoTypes.EDIT_TODO_STATUS, editTodoStatus)
])