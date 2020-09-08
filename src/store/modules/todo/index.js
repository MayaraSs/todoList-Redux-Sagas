import * as TodoTypes from "./types";
import undoable from "redux-undo";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoTypes.SET_TODOS_LIST:
      return action.payload.todos;

    default:
      return state;
  }
};

export default undoable(reducer);
