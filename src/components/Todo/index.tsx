import React from 'react'
import { TodoItem} from '../../store/modules/todo/types'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import {Body} from '../../styles'

interface ComponentTodo {
    todo: TodoItem,
    deleteTodoItem: (id: string) => void,
    editStatus: (todo: TodoItem) => void
}

const Todo: React.FC<ComponentTodo> = ({todo, deleteTodoItem, editStatus }: ComponentTodo) => {

  return (
    <Body>
            <div className="message" key={todo.id}>{todo.message}</div>
                

                
                    {
                        <button onClick={() => editStatus(todo)}>
                            {todo.done ? (
                                <AiFillCheckCircle color="#27ae60"/>
                            ) : (
                                <BsArrowCounterclockwise color="#e67e22"/>
                            )}
                        </button>
                    }
                    
                        <button onClick={() => deleteTodoItem(todo.id)}>
                            <AiFillDelete color="e74c3c"/>
                        </button>
                
               
    </Body>
  )
}

export default Todo
