import { useReducer } from "react"
import { TodoProviderProps, TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id:'1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id:'2',
            desc: 'Piedra del alma',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}



export const TodoProvider = ({children}:TodoProviderProps) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  return (
    <TodoContext.Provider value={{todoState}}>
        {children}
    </TodoContext.Provider>
  )
}
