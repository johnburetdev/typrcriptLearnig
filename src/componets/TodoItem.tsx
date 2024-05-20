import { Todo } from "../App"

interface Props {
    todo: Todo, 
    toggleTodo: (selectTodo: Todo) => void,
    removeTodo: (selectTodo: Todo) => void,
}

const TodoItem = ({todo, toggleTodo, removeTodo} : Props) => {
  return (
    <>
       <article >
              <label htmlFor="todo">
                <input type="checkbox" 
                checked={todo.complete}
                id="todo"
                onChange={()=> toggleTodo(todo)}
                />
                {todo.text}
              </label>

              <button
              onClick={() => removeTodo(todo)}
              className="contrast"
              type="button"
              >Romove</button>
            </article>
    </>
  )
}

export default TodoItem