export interface TodoItem {
    id: string,
    message: string,
    done: boolean
}

export enum TodoTypes {
    'SET_TODOS_LIST' = '@todo/SET_TODOS_LIST',
    'ADD_TODO' = '@todo/ADD_TODO',
    'DELETE_TODO' = '@todo/DELETE_TODO',
    'EDIT_TODO_STATUS' = '@todo/EDIT_TODO_STATUS'
}
