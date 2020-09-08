import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./components/Todo";
import { ActionCreators as UndoActionCreators } from "redux-undo";

import {
  addTodo,
  deleteTodo,
  editTodoStatus,
} from "./store/modules/todo/actions";
import { Container, AddInput } from "./styles";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const [newTodoMessage, setnewTodoMessage] = useState("");

  function deleteTodoItem(id) {
    dispatch(deleteTodo(id));
  }

  function editStatus(todo) {
    dispatch(editTodoStatus(todo));
  }

  function add(message) {
    dispatch(addTodo(message));
  }

  const undo = () => {
    dispatch(UndoActionCreators.undo());
  };
  const canUndo = todos.past.length > 0;

  console.log(todos);

  return (
    <Container>
      <div>
        <h1>TodoList </h1>

        <AddInput>
          <div>
            <input
              type="text"
              value={newTodoMessage}
              onChange={(e) => setnewTodoMessage(e.target.value)}
            />
            <button type="button" onClick={() => add(newTodoMessage)}>
              Add
            </button>
          </div>
        </AddInput>
        <button disabled={!canUndo} onClick={undo}>
          Undo!!
        </button>

        <div>
          {todos.present.length === 0 ? (
            <h5>Não há itens cadastrados.</h5>
          ) : (
            todos.present.map((todo) => (
              <Todo
                todo={todo}
                deleteTodoItem={deleteTodoItem}
                editStatus={editStatus}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default TodoList;
