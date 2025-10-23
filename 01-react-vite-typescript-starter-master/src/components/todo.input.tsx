import { useState } from "react"

interface IProps {
    name? :string
}

const TodoInput = (props:IProps) => {
    const [todo,setTodo]=useState<string>("")

        // const [todo,setTodo]=useState<number>(0)

  return (
    <div style={{display:"flex",gap:15,marginBottom:20}}>
        <input type="text"/>
        <button>Add to</button>
    </div>
  )
}

export default TodoInput