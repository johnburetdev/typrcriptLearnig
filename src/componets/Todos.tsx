import { Todo } from "../App"
import TodoItem from "./TodoItem"

interface Props {
    todos: Todo[], 
    toggleTodo: (selectTodo: Todo) => void,
    removeTodo: (selectTodo: Todo) => void,
}

const Todos = ({todos, toggleTodo, removeTodo} : Props) => {
  return (
   <>
   {todos.map((todo) => (
     <TodoItem 
        key={todo.text}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo} 
        /> ))
    }
   
   </>
  )
}

export default Todos