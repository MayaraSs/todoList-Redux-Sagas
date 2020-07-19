import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from './store/index'
import Todo from './components/Todo'
import {  addTodo, deleteTodo, editTodoStatus } from './store/modules/todo/actions'
import { TodoItem } from './store/modules/todo/types';
import { Container, AddInput } from './styles';


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
        <Container>
            <div>
                <h1>TodoList </h1>

                    <AddInput>
                            <div>
                                <input 
                                    type="text" 
                                    value={newTodoMessage} 
                                    onChange={ e => setnewTodoMessage(e.target.value) }
                                />
                                <button 
                                    type="button"  
                                    onClick={() => add(newTodoMessage)}
                                >
                                    Add
                                </button>
                            </div>
                    </AddInput>

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
        </Container>
    )
}

export default TodoList