import React from "react";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { Body } from "../../styles";

const Todo = ({ todo, deleteTodoItem, editStatus }) => {
  return (
    <Body>
      <div className="message" key={todo.id}>
        {todo.message}
      </div>

      {
        <button onClick={() => editStatus(todo)}>
          {todo.done ? (
            <AiFillCheckCircle color="#27ae60" />
          ) : (
            <BsArrowCounterclockwise color="#e67e22" />
          )}
        </button>
      }

      <button onClick={() => deleteTodoItem(todo.id)}>
        <AiFillDelete color="e74c3c" />
      </button>
    </Body>
  );
};

export default Todo;
