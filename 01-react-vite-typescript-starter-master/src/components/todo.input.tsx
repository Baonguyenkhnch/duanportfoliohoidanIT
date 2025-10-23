import { useState } from "react"

interface IProps {
    name? :string
}

const TodoInput = (props:IProps) => {
    const [todo,setTodo]=useState<string>("");
    const handleTextChange =(event:React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(event.target.value)
    }
    const handleClick =()=>{
        console.log(todo)
    }

        // const [todo,setTodo]=useState<number>(0)

  return (
    <div style={{display:"flex",gap:15,marginBottom:20}}>
        <input type="text"
        value={todo}
        onChange={handleTextChange}
        />
        <button onClick={handleClick}>Add to</button>
    </div>
  )
}

export default TodoInput