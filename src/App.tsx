import { useState } from "react"
import FormAddTodo from "./componets/FormAddTodo";
import Todos from "./componets/Todos";

export interface Todo {
  text: string,
  complete: boolean
}

const initialTodos = [
  {
  text: 'Aprender REACT',
    complete: true
  },
  {
  text: 'Aprender TYPESCRIPT',
    complete: false
  },
  {
  text: 'Aprender NEXT',
    complete: false
  }
]


const App = () => {

const [todos, setTodos] = useState<Todo[]>(initialTodos);

const addTodo = (text: string) => {
  const newTodo = {
    text,
    complete: false
  }
  setTodos([...todos, newTodo])
}

const toggleTodo = (selectTodo: Todo) => {
  setTodos(prevTodos => {
    return prevTodos.map(todo => {
      if(todo === selectTodo){
        return{
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
  })
}

const removeTodo = (selectTodo: Todo) => {
  setTodos(prevTodos => {
    return prevTodos.filter((todo) => todo !== selectTodo)
  })
}

  return (
    <div className="container">
      <h1>TODO</h1>
     <FormAddTodo addTodo={addTodo} />
      <div>
        <Todos 
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        />
      </div>
    </div>
  )
}

export default App