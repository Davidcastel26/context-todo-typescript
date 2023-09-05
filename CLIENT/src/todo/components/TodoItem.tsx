import { Todo } from "../interfaces/interfaces"

interface TodoItemsProps {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemsProps) => {

    const handleDbClick = () => {
        console.log('handle doble click', todo.desc);
        
    }

  return (
    <li onDoubleClick={handleDbClick}>
        { todo.desc }
    </li>
  )
}
