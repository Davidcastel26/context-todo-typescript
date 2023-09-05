import { Todo, TodoState } from "../interfaces/interfaces";

type TodoActions = 
    | {type: 'addTodo', payload: Todo}
    | {type: 'toggleTodo', payload: {id: string}}

export const todoReducer = (state: TodoState, action:TodoActions):TodoState => {

    switch(action.type){
        case 'addTodo':
            return{
                ...state,
                todos:[...state.todos, action.payload]
            }
            
        default:
            return state
    }
}