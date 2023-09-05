import { useContext } from "react";
import { Todo } from "../interfaces/interfaces"
import { TodoContext } from "../context/TodoContext";

interface TodoItemsProps {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemsProps) => {
  
  const {toggleTodo} = useContext(TodoContext)

  const handleDbClick = () => {
    // console.log('handle doble click', todo.desc);
    toggleTodo(todo.id)
  }


  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration:todo.completed ? 'line-through' : ''
      }}
      onDoubleClick={handleDbClick}
    >
      { todo.desc }
    </li>
  )
}
