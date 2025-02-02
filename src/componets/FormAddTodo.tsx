import { ChangeEvent, useState } from "react"

interface Props{
  addTodo: (text: string) => void
}

const FormAddTodo = ({addTodo} : Props) => {
    const [text, setText] = useState("")

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedText = text.trim()
        if(!trimmedText) return
        addTodo(trimmedText);
        setText("")
    }

    
    return (
    <form onSubmit={handleSubmit} >
        <label htmlFor="todo">To Do</label>
        <input type="text" id="todo" placeholder="Ingrese el TO DO" value={text} 
        onChange={(e) => setText(e.target.value)} />
        <button type="submit">ADD TO DO</button>
      </form>
  )
}

export default FormAddTodo