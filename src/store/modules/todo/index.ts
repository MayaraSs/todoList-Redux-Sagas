import { Reducer } from 'redux'
import { TodoTypes, TodoItem } from './types'

const INITIAL_STATE: TodoItem[] = [];

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {  
    
    case TodoTypes.SET_TODOS_LIST:
      return action.payload.todos

    default:
      return state
  }
  
}

export default reducer
