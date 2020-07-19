import React from 'react'
import { TodoItem} from '../../store/modules/todo/types'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'

interface ComponentTodo {
    todo: TodoItem,
    deleteTodoItem: (id: string) => void,
    editStatus: (todo: TodoItem) => void
}

const Todo: React.FC<ComponentTodo> = ({todo, deleteTodoItem, editStatus }: ComponentTodo) => {

  return (
    <div className="todo" key={todo.id}>
        <div>{todo.message}</div>
        <div className="actions">

            {
                
                    <button type="button" className="icon" onClick={() => editStatus(todo)}>
                        {todo.done ? (
                            <AiFillCheckCircle color="#27ae60"/>
                        ) : (
                            <BsArrowCounterclockwise color="#e67e22"/>
                        )}
                    </button>
                    
            }
            
            <button type="button" className="icon" onClick={() => deleteTodoItem(todo.id)}>
                <AiFillDelete color="e74c3c"/>
            </button>
        </div>
    </div>
  )
}

export default Todo
