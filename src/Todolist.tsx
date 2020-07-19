import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './styles.css'
import { ApplicationState } from './store/index'
import Todo from './components/Todo'
import {  addTodo, deleteTodo, editTodoStatus } from './store/modules/todo/actions'
import { TodoItem } from './store/modules/todo/types';


const TodoList: React.FC = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: ApplicationState) => state.todo )

    const [newTodoMessage, setnewTodoMessage] = useState("")

    function deleteTodoItem(id: string){
        dispatch(deleteTodo(id))
    }

    function editStatus(todo: TodoItem){
        dispatch(editTodoStatus(todo))
    }

    function add(message: string){
        dispatch(addTodo(message))
    }

    
    return (
        <div id="todoList">
            <h1>TodoList </h1>

            <div className="todoInput">
                <input 
                    type="text" 
                    value={newTodoMessage} 
                    onChange={ e => setnewTodoMessage(e.target.value) }
                />
                <button 
                    type="button" 
                    className="addTodo" 
                    onClick={() => add(newTodoMessage)}
                >
                    Add
                </button>
            </div>


            <div>
                {
                    todos.length === 0 ? (
                        <h5>Não há itens cadastrados.</h5>
                    ) : (
                        todos.map(todo => (
                            <Todo todo={todo} deleteTodoItem={deleteTodoItem} editStatus={editStatus}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default TodoList